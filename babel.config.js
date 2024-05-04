module.exports = {
    presets: ['@vue/cli-plugin-babel/preset'],
    plugins: [
        [
            'import',
            {
                libraryName: '@hyhello/utils',
                camel2DashComponentName: false
            },
            '@hyhello/utils'
        ],
        [
            'import',
            {
                libraryName: 'element-ui',
                styleLibarryDirectory: 'lib/theme-chalk'
            },
            'element-ui'
        ]
    ]
};
