import { store } from '@hyhello/utils';
import { ACCESS_TOKEN, USER_INFO } from '@/common/constants';

export default {
    LOGIN_OUT(state) {
        state.userInfo = null;
        state.isLogin = false;
        store.remove(ACCESS_TOKEN, true);
        store.remove(USER_INFO, true);
    },
    LOGIN_IN(state, res = {}) {
        state.isLogin = true;
        store.set(ACCESS_TOKEN, res.accessToken, true);
    },
    SET_USER_INFO(state, res) {
        state.isLogin = true;
        state.userInfo = res;
        store.set(USER_INFO, res, true);
    }
};
