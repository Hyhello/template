const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
    publicPath: process.env.VUE_APP_PUBLIC_PATH,
    transpileDependencies: true,
    css: {
        loaderOptions: {
            sass: {
                additionalData: '@import "src/assets/styles/_mixins.scss";'
            }
        }
    }
});
