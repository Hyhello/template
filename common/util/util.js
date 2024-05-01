// 获取url中的参数
export const getUrlParams = (url) => {
    let result = {
        url: '',
        params: {}
    };
    let list = url.split('?');
    result.url = list[0];
    let params = list[1];
    if (params) {
        let list = params.split('&');
        list.forEach(ele => {
            let dic = ele.split('=');
            let label = dic[0];
            let value = dic[1];
            result.params[label] = value;
        });
    }
    return result;
};

// oneOf
export const oneOf = (target, list = []) => {
    return list.includes(target);
};

// isH5
export const isH5 = () => {
    let flag = false;
    // #ifdef H5
    flag = true;
    // #endif
    return flag;
};

/**
 * 根据参数 fmt 格式化 date 日期。
 * @param date 待处理的日期。
 * @param fmt 格式化模板。
 * @returns {string} 返回格式化后的日期。
 */
export function formatDate(date, fmt = 'yyyy-MM-dd hh:mm:ss') {
	if (date == null) return new Date(NaN).toString();
	// 解决ios下面-无法被new Date问题
	if (typeof date === 'string' && reg.test(date)) {
		date = date.replace(/-/g, '/');
	}
	if (!(date instanceof Date)) {
		date = new Date(date);
	}
	const o = {
		'M+': date.getMonth() + 1, // 月份
		'd+': date.getDate(), // 日
		'h+': date.getHours(), // 小时
		'm+': date.getMinutes(), // 分
		's+': date.getSeconds(), // 秒
		'q+': Math.floor((date.getMonth() + 3) / 3) // 季度
	};
	// 格式化年
	if (/(y+)/.test(fmt)) {
		fmt = fmt.replace(RegExp.$1, `${date.getFullYear()}`.substr(4 - RegExp.$1.length));
	}
	// 格式化毫秒
	if (/(S+)/.test(fmt)) {
		const tmp = date.getMilliseconds();
		fmt = fmt.replace(RegExp.$1, `000${tmp}`.substr(`${tmp}`.length));
	}
	// 格式化其它
	for (const k in o) {
		if (new RegExp(`(${k})`).test(fmt)) {
			// @ts-ignore
			fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : `00${o[k]}`.substr(`${o[k]}`.length));
		}
	}
	return fmt;
}