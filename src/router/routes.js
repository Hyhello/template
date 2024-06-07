import _import from './_import';

const routes = [
    {
        path: '*',
        component: _import('Errors/404')
    },
    {
        path: '/login',
        name: 'login',
        component: _import('Login/index'),
        meta: {
            title: '登录'
        }
    }
    // {
    //     path: '/',
    //     name: '/',
    //     component: () => import('@/views/main/index.vue'),
    //     children: []
    // }
];

export default routes;
