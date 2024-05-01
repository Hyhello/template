const routes = [
	{
		path: '/pages/login/login',
		aliasPath:'/login',
		name: 'login',
		meta: {
			title: '登录',
		}
	},
	{
		//注意：path必须跟pages.json中的地址对应，最前面别忘了加'/'哦
		path: '/pages/main',
		aliasPath:'/',
		name: 'layout',
		meta: {
			title: '主页',
		}
	}
]
export default routes
