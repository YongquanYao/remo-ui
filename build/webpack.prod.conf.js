'use strict'
//引入node路径相关
const path = require('path')
// 引入工具函数
const utils = require('./utils')
// 引入 webpack
const webpack = require('webpack')
// 引入配置文件
const config = require('../config')
// 引入合并webpack配置插件
const merge = require('webpack-merge')
// 引入基础配置
const baseWebpackConfig = require('./webpack.base.conf')
// 引入拷贝文件和文件夹
const CopyWebpackPlugin = require('copy-webpack-plugin')
// 压缩处理HTML文件
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
// 压缩处理CSS的插件
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
// 压缩处理JS的插件
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

// 用DefinePlugin定义环境
const env = process.env.NODE_ENV === 'testing'
// 这里是 {NODE_EV: 'testing'}
  ? require('../config/test.env')
  // 这里是 {NODE_EV: 'proding'}
  : require('../config/prod.env')

// 合成WEBPACK配置
const webpackConfig = merge(baseWebpackConfig, {
  module: {
    // 通过 styleLoaders函数生成样式的一些规则
    rules: utils.styleLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: true,
      usePostCSS: true
    })
  },
  devtool: config.build.productionSourceMap ? config.build.devtool : false,
  output: {
    // 这里是根目录下的dist
    path: config.build.assetsRoot,
    // 文件名称
    filename: utils.assetsPath('js/[name].[chunkhash].js'),
    // chunks名称
    chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
  },
  plugins: [
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    // 定义具体是什么环境
    new webpack.DefinePlugin({
      'process.env': env
    }), 
    // 压缩js插件
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: false
        }
      },
      sourceMap: config.build.productionSourceMap,
      parallel: true
    }),
    // extract css into its own file
    // 提取CSS到单独的css文件
    new ExtractTextPlugin({
      filename: utils.assetsPath('css/[name].[contenthash].css'),
      // Setting the following option to `false` will not extract CSS from codesplit chunks.
      // Their CSS will instead be inserted dynamically with style-loader when the codesplit chunk has been loaded by webpack.
      // It's currently set to `true` because we are seeing that sourcemaps are included in the codesplit bundle as well when it's `false`, 
      // increasing file size: https://github.com/vuejs-templates/webpack/issues/1110
      allChunks: true,
    }),
    // Compress extracted CSS. We are using this plugin so that possible
    // duplicated CSS from different components can be deduped.
    new OptimizeCSSPlugin({
      cssProcessorOptions: config.build.productionSourceMap
        ? { safe: true, map: { inline: false } }
        : { safe: true }
    }),
    // generate dist index.html with correct asset hash for caching.
    // you can customize output by editing /index.html
    // see https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: process.env.NODE_ENV === 'testing'
        ? 'index.html'
        // 这里是目录下的dist/index.html
        : config.build.index,
      template: 'index.html',
      // false的话不注入JS script
      inject: true,
      // favicon: path.resolve('./public/favicon/favicon.ico'),// 在此处设置favicon 
      minify: {
        // 删除注释
        removeComments: true,
        // 删除空格和换行
        collapseWhitespace: true,
        // 删除标签中的双引号
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency'
    }),
    // keep module.id stable when vendor modules does not change
    // 根据代码内容生成普通模块的id, 确保原码不变，moduleID不变
    new webpack.HashedModuleIdsPlugin(),
    // enable scope hoisting
    new webpack.optimize.ModuleConcatenationPlugin(),
    // split vendor js into its own file
    // 提取公共代码
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks (module) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        )
      }
    }),
    // extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
    new webpack.optimize.CommonsChunkPlugin({
      // 把公共的部分放到manifest中
      name: 'manifest',
      // 传入
      minChunks: Infinity
    }),
    // This instance extracts shared chunks from code splitted chunks and bundles them
    // in a separate chunk, similar to the vendor chunk
    // see: https://webpack.js.org/plugins/commons-chunk-plugin/#extra-async-commons-chunk
    // 动态提取组件
    new webpack.optimize.CommonsChunkPlugin({
      name: 'app',
      // 如果设置为 `true`，一个异步的  公共chunk 会作为 `options.name` 的子模块，和 `options.chunks` 的兄弟模块被创建。
      // 它会与 `options.chunks` 并行被加载。可以通过提供想要的字符串，而不是 `true` 来对输出的文件进行更换名称。
      async: 'vendor-async',
      // 如果设置为 `true`，所有  公共chunk 的子模块都会被选择
      children: true,
      // 最小3个，包含3，chunk的时候提取
      minChunks: 3
    }),

    // copy custom static assets
    // 把static资源复制到相应目录
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        // 这里是static
        to: config.build.assetsSubDirectory,
        // // 忽略.开头的文件。比如这里的.gitkeep，这个文件是指空文件夹也提交到git
        ignore: ['.*']
      }
    ])
  ]
})

// 如果开始gzip压缩，使用compression-webpack-plugin插件处理。这里配置是false
if (config.build.productionGzip) {
  const CompressionWebpackPlugin = require('compression-webpack-plugin')
// 需要使用是需要安装 npm i compression-webpack-plugin -D
  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      // asset： 目标资源名称。 [file] 会被替换成原始资源。
      // [path] 会被替换成原始资源的路径， [query] 会被替换成查询字符串。默认值是 "[path].gz[query]"。
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      // test： 所有匹配该正则的资源都会被处理。默认值是全部资源。
      // config.build.productionGzipExtensions 这里是['js', 'css']  
      test: new RegExp(
        '\\.(' +
        config.build.productionGzipExtensions.join('|') +
        ')$'
      ),
      // threshold： 只有大小大于该值的资源会被处理。单位是 bytes。默认值是 0。
      threshold: 10240,
      // minRatio： 只有压缩率小于这个值的资源才会被处理。默认值是 0.8。
      minRatio: 0.8
    })
  )
}
// 输出分析的插件 运行npm run build --report
// config.build.bundleAnalyzerReport这里是 process.env.npm_config_report
// build结束后会自定打开 http://127.0.0.1:8888 链接
if (config.build.bundleAnalyzerReport) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}
// 最终导出 webpackConfig
module.exports = webpackConfig
