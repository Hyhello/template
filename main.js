import App from './App';

import Vue from 'vue';
import store from './store';
import './uni.promisify.adaptor';
import Tips from'@/common/util/tip';
import filters from '@/common/filters';
import { router, RouterMount } from '@/common/router';
import cuCustom from 'plugin/colorui/components/cu-custom.vue';

Vue.use(router);
Vue.use(filters);

Vue.component('cu-custom', cuCustom);

Vue.prototype.$tip = Tips;
Vue.config.productionTip = false;
App.mpType = 'app';

const app = new Vue({
	store,
  ...App
})

// #ifdef H5
	RouterMount(app, router, '#app')
// #endif

// #ifndef H5
	app.$mount(); //为了兼容小程序及app端必须这样写才有效果
// #endif