/**
 * 作者：yeshengqiang
 * 时间：2021-05-31
 * 描述：actions
 */
import {
    userInfo
} from '@/pages/login/service';

export default {
    // 获取用户信息
    async getUserInfo({
        commit
    }) {
        const res = await userInfo({
            isApp: 1
        });
        this.commit('SET_USER_INFO', res);
        return res;
    }
};
