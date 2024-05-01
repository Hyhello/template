import requireAll from '@/common/util/requireAll';

const modules = requireAll(require.context('./src', false, /\.js$/));

const install = (Vue) => {
  for (const i in modules) {
    Vue.filter(modules[i].name, modules[i].handler);
  }
};

export default install;
