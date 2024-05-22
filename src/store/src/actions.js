// import { userInfo } from '@/views/login/service';

export default {
    // 获取用户信息
    async getUserInfo({ commit }) {
        const res = { id: 1, username: '张三' };
        commit('SET_USER_INFO', res);
        return Promise.resolve();
    }
};
