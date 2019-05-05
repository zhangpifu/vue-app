const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    // 基本路径
    publicPath: '/',
    // 输出文件目录
    outputDir: 'dist',
    assetsDir: 'static',
    // eslint-loader 是否在保存的时候检查
    lintOnSave: true,
    chainWebpack: (config) => {
        // 配置文件路径别名，简化文件路径的书写
        config.resolve.alias
            .set('@$', resolve('src'))
            .set('assets', resolve('src/assets'))
            .set('components', resolve('src/components'))
            .set('layout', resolve('src/views/layout'))
            .set('icon', resolve('src/icon'))
            .set('api', resolve('src/api'))
            .set('static', resolve('src/static'))

        // 配置 style文件的自动转换 将px自动转化成rem
        config.module
            .rule('less')
            .test(/\.less$/)
            .oneOf('vue')
            .resourceQuery(/\?vue/)
            .use('px2rem')
            .loader('px2rem-loader')
            .options({
                remUnit: 75
            })
    },
    configureWebpack: () => {},
    // vue-loader 配置项
    // https://vue-loader.vuejs.org/en/options.html
    // vueLoader: {},

    // 生产环境是否生成 sourceMap 文件
    // 把这个改为false。不然在最终打包的文件中会出现一些map文件，map文件的作用在于：项目打包后，
    // 代码都是经过压缩加密的，如果运行时报错，输出的错误信息无法准确得知是哪里的代码报错。
    productionSourceMap: false,

    // css相关配置
    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        extract: false,
        // 开启 CSS source maps?
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {
            // css: {
            //     localIdentName: '[name]-[hash]',
            //     camelCase: 'only'
            // },
            less: {
                // 所以这里假设你有 `src/variables.less` 这个文件
                data: `@import "~@/global.less";`
            },
            postcss: {
                plugins: [
                    // require('postcss-pxtorem')({
                    //     rootValue : 75, // 换算的基数
                    //     // selectorBlackList  : ['weui','mu'], // 忽略转换正则匹配项
                    //     propList   : ['*'],
                    //     mintvalue:2
                    // }),
                    // require('autoprefixer')({
                    //     browsers: ['Android >= 4.0', 'iOS >= 7']
                    // }),
                ]
            }
        }
    },
    // 在生产构建中使用babel & TS线程加载器
    // 如果机器有1个以上的内核，默认情况下启用
    // parallel: require('os').cpus().length > 1,
    // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
    pwa: {},
    // webpack-dev-server 相关配置
    devServer: {
        // open: process.platform === 'darwin',
        open: true,
        host: '0.0.0.0',
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: null // 设置代理
        // before: app => {}
    },
    // 第三方插件配置
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [
                path.resolve(__dirname, './src/style/global.less')
            ]
        }
    }
}
