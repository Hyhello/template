/**
 * 作者：yeshengqiang
 * 时间：2021-05-31
 * 描述：mutaions
 */

import {
    isH5
} from '@/common/util/util';
import {
    ACCESS_TOKEN,
    USER_INFO,
    PAGE_CUR
} from "@/common/util/constants";

export default {
    LOGIN_OUT(state) {
        state.userInfo = null;
        state.isLogin = false;
        uni.removeStorageSync(ACCESS_TOKEN);
        uni.removeStorageSync(USER_INFO);
        this.commit('SET_PAGE_CUR', '');
    },
    LOGIN_IN(state, res = {}) {
        state.isLogin = true;
        uni.setStorageSync(ACCESS_TOKEN, res.accessToken);
    },
    SET_USER_INFO(state, res) {
        state.isLogin = true;
        state.userInfo = res;
        uni.setStorageSync(USER_INFO, res);
    },
    SET_PAGE_CUR(state, res) {
        state.pageCur = res;
        if (isH5()) {
            if (res) {
                uni.setStorageSync(PAGE_CUR, res);
            } else {
                uni.removeStorageSync(PAGE_CUR);
            }
        }
    }
};
