import http from '@/common/httpRequest.js';

const loginApi = 'appApi/h5AppLogin';

const userInfoApi = 'appApi/get-permission-info';

// 登录
export const login = payload => http.post(loginApi, payload);

// 获取用户信息
export const userInfo = opt => http.get(userInfoApi, { params: opt });