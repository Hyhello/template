
import store from '@/store';
import routes from './routes';
import Tips from '../util/tip';
import { oneOf } from '../util/util';
import { ACCESS_TOKEN } from '../util/constants';
import { RouterMount, createRouter } from 'uni-simple-router';

const router = createRouter({
	encodeURI: true,
	platform: process.env.VUE_APP_PLATFORM,
	routes
});

const whiteList = ['/login'];

//全局路由前置守卫
router.beforeEach(async (to, from, next) => {
	// 在免登录白名单，直接进入
	if (oneOf(to.aliasPath, whiteList) || store.state.isLogin) {
		next();
	} else {
		if (uni.getStorageSync(ACCESS_TOKEN)) {
			try {
				await store.dispatch('getUserInfo');
				next();
			} catch (e) {
				store.commit('LOGIN_OUT');
				Tips.toast('系统登录已过期，请重新登录！');
				next({ name: 'login', replace: true, params: { target: to.aliasPath } });
			}
		} else {
			store.commit('LOGIN_OUT');
			// 提示，退出登录
			Tips.toast('系统未登录，请登录！');
			next({ name: 'login', replace: true, params: { target: to.aliasPath } });
		}
	}
})

export {
	router,
	RouterMount
}
