const routes = [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/index.vue'),
        meta: {
            title: '登录'
        }
    },
    {
        path: '/',
        name: '/',
        component: () => import('@/views/main/index.vue'),
        children: []
    }
];

export default routes;
