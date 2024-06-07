import httpRequest from '@/common/httpRequest';

const userInfoApi = 'get/userInfo';

export const userInfo = (req) => httpRequest.get(userInfoApi, { params: req });
