/**
 * 作者：yeshengqiang
 * 时间：2021-05-31
 * 描述：获取用户信息
 */
import { store } from '@hyhello/utils';
import { USER_INFO } from '@/common/constants';

export default {
    userInfo(state) {
        return state.userInfo || store.get(USER_INFO, true) || {};
    }
};
