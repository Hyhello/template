const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
    publicPath: process.env.VUE_APP_PUBLIC_PATH,
    transpileDependencies: true
});
