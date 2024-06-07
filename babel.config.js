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
                customStyleName: (name) => {
                    return `element-ui/lib/theme-chalk/${name}.css`;
                }
            },
            'element-ui'
        ]
    ]
};
