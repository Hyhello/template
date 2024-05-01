import http from '@/common/httpRequest.js';

const loginOutApi = 'appApi/logout';

// 注销登录
export const loginOut = payload => http.post(loginOutApi, payload);