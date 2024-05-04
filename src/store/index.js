import Vue from 'vue';
import Vuex from 'vuex';
import state from './src/state';
import actions from './src/actions';
import getters from './src/getters';
import mutations from './src/mutations';
import requireAll from '@/common/requireAll';

// 获取modules
const modules = requireAll(require.context('./src/modules', false, /\.js$/));

Vue.use(Vuex);

const store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    modules,
    strict: process.env.NODE_ENV !== 'production'
});

export default store;
