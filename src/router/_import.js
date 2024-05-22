import ModuleMissing from '@/views/Errors/module-missing.vue';

const _import = (filePath) => {
    return process.env.NODE_ENV === 'production'
        ? () =>
              import('@/views/' + filePath + '.vue')
                  .then((module) => module.default)
                  .catch((e) => {
                      console.log('加载模块出错：', e);
                      return ModuleMissing;
                  })
        : require('@/views/' + filePath + '.vue').default;
};

export default _import;
