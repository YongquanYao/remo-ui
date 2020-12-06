'use strict'
//引入工具函数
const utils = require('./utils')
//引入Webpack
const webpack = require('webpack')
//引入config/index.js配置
const config = require('../config')
//合并webpack配置
const merge = require('webpack-merge')
// 引入Node文件路径
const path = require('path')
//基本配置
const baseWebpackConfig = require('./webpack.base.conf')
//拷贝插件
const CopyWebpackPlugin = require('copy-webpack-plugin')
//生成html插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 友好提示的插件
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
// 查找可用端口
const portfinder = require('portfinder')

// process模块用来与当前进程互动，可以通过全局变量process访问,不并使用require命令加载

//host
const HOST = process.env.HOST
// 端口
const PORT = process.env.PORT && Number(process.env.PORT)

// 合成基本的WEPACK配置
const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    // cssSourceMap这里配置的是true
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,

  // these devServer options should be customized in /config/index.js
  devServer: {
    // 配置在客户端的日志等级，这会影响到你在浏览器开发者工具控制台看到的日志内容
    clientLogLevel: 'warning',
    // historyApiFallback boolean object 用于方便的开发使用HTML5 HISTORY API的单页应用
    historyApiFallback: {
      rewrites: [
        // config.dev.assetsPublicPath 这里是 /
        { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
      ],
    },
    // 开启热更新
    hot: true,
    // contentBase 配置DevServer HTTP服务器的文件根目录；一般情况不需要设置，通常是项目根目录
    contentBase: false, // since we use CopyWebpackPlugin.
    // compress 配置是否启用 GZIP压缩。
    compress: true,
    // 这里配置的事Localhost
    host: HOST || config.dev.host,
    // 这里是8080
    port: PORT || config.dev.port,
    //自动打开浏览器，这里是不打开
    open: config.dev.autoOpenBrowser,
    //是否在浏览器以遮罩层形式报错信息 这里是true
    overlay: config.dev.errorOverlay
      ? { warnings: false, errors: true }
      : false,
    // 这里是 /
    publicPath: config.dev.assetsPublicPath,
    // 代理 这里是空{},有需要可以自行配置 如本地跨域访问
    proxy: config.dev.proxyTable,
    /////////
    // 开启后编译成功不会显示一堆东西 只有YOUR APPLICATION IS RUNNING AT : http://localhost:8080
    /////////
    quiet: true, // necessary for FriendlyErrorsPlugin
    //  Watch模式的选项
    watchOptions: {
      // 指定毫秒为单位的轮询 这里是FALSE
      poll: config.dev.poll,
    }
  },

  plugins: [
    new webpack.DefinePlugin({
      //这里是{NODE_ENV: '"development"'}
      'process.env': require('../config/dev.env')
    }),
    // 热更新插件
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    // 生成html插件
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      // true: script标签位于HTML文件BODY底部
      // false: 纯HTML文件  
      inject: true,
      favicon: path.resolve('./static/favicon/favicon.ico'),// 在此处设置favicon
    }),
    // copy custom static assets
    // 把static文件夹资源复制到相应目录
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        //这里是static
        to: config.dev.assetsSubDirectory,
        // 忽略文件名开头为'.'的 如.gitkeep一些配置文件
        ignore: ['.*']
      }
    ])
  ]
})

// 导出一个PROMISE
module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors
        ? utils.createNotifierCallback()
        : undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})
