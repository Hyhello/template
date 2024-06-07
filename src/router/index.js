import Vue from 'vue';
import store from '@/store';
import routes from './routes';
import VueRouter from 'vue-router';
import { Message } from 'element-ui';
import { ACCESS_TOKEN } from '@/common/constants';
import { oneOf, store as _store } from '@hyhello/utils';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: process.env.VUE_APP_PUBLIC_PATH,
    routes
});

const whiteList = ['/login'];

//全局路由前置守卫
router.beforeEach(async (to, from, next) => {
    // 在免登录白名单，直接进入
    if (oneOf(to.path, whiteList) || store.state.isLogin) {
        next();
    } else {
        if (_store.get(ACCESS_TOKEN, true)) {
            try {
                await store.dispatch('getUserInfo');
                next();
            } catch (e) {
                store.commit('LOGIN_OUT');
                Message.warning('系统登录已过期，请重新登录！');
                next({ path: '/login', replace: true, params: { target: to.aliasPath } });
            }
        } else {
            store.commit('LOGIN_OUT');
            // 提示，退出登录
            Message.warning('系统未登录，请登录！');
            next({ path: '/login', replace: true, params: { target: to.aliasPath } });
        }
    }
});

export default router;
