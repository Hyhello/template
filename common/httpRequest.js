import Request from 'luch-request';
import store from '@/store/index';
import Tips from '@/common/util/tip';
import { ACCESS_TOKEN } from './util/constants';

const BASE_URL = 'http://8.148.6.250:48089/app-api';

const http = new Request({
	baseURL: BASE_URL
});

http.interceptors.request.use(
	function (conf) {
		// get 请求加上随机数，防止ie下面有缓存
		if (conf.method === 'GET') {
			conf.params = {
				t: new Date().getTime(),
				...conf.params
			};
		}
		// 设置头部
		conf.header.Authorization = 'Bearer ' + uni.getStorageSync(ACCESS_TOKEN);
		conf.header['Tenant-Id'] = 1;

		return conf;
	},
    function (err) {
		return Promise.reject(err);
	}
)

// 必须使用异步函数，注意
http.interceptors.response.use(
	function (res) {
		// 401, 用户session失效
		if (res.data && res.data.code === 401) {
			// 只有已打开的页面（获取过菜单）才出现提示，避免新打开的页面出现
			// 新打开的页面也不使用此处的跳转到login，因为 router.currentRoute.path 不符合预期
			// if (router.options.hasDynamicRoutes) {
				// showErrorMsg(res.data.msg);
			// }
			// store.commit('LOGIN_OUT');
			// router.push({
			// 	name: 'login',
			// 	params: {
			// 		target: router.currentRoute.path
			// 	}
			// });

			return Promise.reject(res);
		}
		// 此处可根据自己的业务进行调整
		if (res.data && res.data.code !== 0) {
			if (res.data.msg) {
				Tips.error(res.data.msg);
			} else {
				Tips.error('数据获取失败！');
			}
			return Promise.reject(res);
		}
		return res.data.data;
	},
    function (err) {
		switch (err.statusCode) {
			case 400:
				err.msg = '请求错误(400)';
				break;
			case 401:
				err.msg = '未授权，请重新登录(401)';
				break;
			case 403:
				err.msg = '拒绝访问(403)';
				break;
			case 404:
				err.msg = '请求出错(404)';
				break;
			case 408:
				err.msg = '请求超时(408)';
				break;
			case 500:
				err.msg = '服务器错误(500)';
				break;
			case 501:
				err.msg = '服务未实现(501)';
				break;
			case 502:
				err.msg = '网络错误(502)';
				break;
			case 503:
				err.msg = '服务不可用(503)';
				break;
			case 504:
				err.msg = '网络超时(504)';
				break;
			case 505:
				err.msg = 'HTTP版本不受支持(505)';
				break;
            default:
                const code = err.statusCode ? `(${err.statusCode})` : '';
                err.msg = `连接出错${code}!`;
		}
		Tips.error(err.msg);
		return Promise.reject(err);
	}
)

export default http;
