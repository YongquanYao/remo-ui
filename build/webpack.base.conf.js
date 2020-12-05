'use strict'
const path = require('path')
//引入工具
const utils = require('./utils')
// 引入配置危机
const config = require('../config')
// 引入vue-loader的配置文件
const vueLoaderConfig = require('./vue-loader.conf')
// 定义获取绝对路径函数
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
// 设置eslint
const createLintingRule = () => ({
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  //执行顺序，把 eslint-loader 的执行顺序放到最前面，防止其它 Loader 把处理后的代码交给 eslint-loader 去检查
  enforce: 'pre',
  //包含文件夹
  include: [resolve('exmaples'), resolve('test'), resolve('packages')],
  options: {
    //使用友好插件提示
    formatter: require('eslint-friendly-formatter'),
    // 这里是false
    emitWarning: !config.dev.showEslintErrorsInOverlay
  }
})

module.exports = {
  // 运行环境的上下文，就是实际的目录，也就是根目录
  context: path.resolve(__dirname, '../'),
  // 入口文件
  entry: {
    app: './examples/main.js'
  },
  // 输出
  output: {
    // 路径这里是根目录下的dist文件夹
    path: config.build.assetsRoot,
    // 文件名
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      // 这里是'/' 如果上传到githubpag 需要改成'./'
      ? config.build.assetsPublicPath
      // 这里是 '/'
      : config.dev.assetsPublicPath
  },
  // Webpack在启动后会从配置的入口模块出发找出所有依赖的模块， 
  // resolve配置如何寻找模块所对应的文件
  resolve: {
    // 配置了这个对应的扩展名可以省略
    extensions: ['.js', '.vue', '.json'],
    alias: {
      // 给定对象的键后的末尾添加$,以表示精准匹配 node_modules/vue/dist/vue.esm.js
      'vue$': 'vue/dist/vue.esm.js',
       // src别名 比如：引入import HelloWord from '@/components/HelloWorld'
      '@': resolve('examples'),
    }
  },
  // 定义一些文件的转换规则
  module: {
    rules: [
      // 是否使用esline True
      ...(config.dev.useEslint ? [createLintingRule()] : []),
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },  
      {
        //js使用babel-loader转换
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('examples'), resolve('test'), resolve('packages'), resolve('node_modules/webpack-dev-server/client')]
      },
      {
        //图片文件使用url-loader转换
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          //限制在10000B以内转换成BASE64编码的dataURL字符
          limit: 10000,
          //输出路径 img/名称.7位hash.扩展名
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        //视频文件使用url-loader转换
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        //图片文件使用url-loader转换
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
      // {
      //   test: /\.scss$/,
      //   loaders: ["style", "css", "sass"]
      // }
    ]
  },
  //这里的node是一对象，其中每个属性都是Node.js全局变量或模块的名称
  // empty提供空对象
  // false什么也不提供
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
