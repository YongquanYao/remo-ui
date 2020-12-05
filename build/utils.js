'use strict'
const path = require('path')
// 引入配置 文件
const config = require('../config')
//提取CSS的插件
const ExtractTextPlugin = require('extract-text-webpack-plugin')
// 引入package.json配置
const packageConfig = require('../package.json')
const { extract } = require('extract-text-webpack-plugin')

// 返回路径
exports.assetsPath = function (_path) {
  const assetsSubDirectory = process.env.NODE_ENV === 'production'
    // 2级目录这里是'static'
    ? config.build.assetsSubDirectory 
    // 这里试是''                                                               // 2级目录这里是'static'
    : process.env.NODE_ENV === 'lib' ? config.lib.assetsSubDirectory : config.dev.assetsSubDirectory
  //生成跨平台兼容的路径 
  return path.posix.join(assetsSubDirectory, _path)
}

exports.cssLoaders = function (options) {
  //作为参数传递进来的option对象
  // {
  //   sourceMap: true,
  //   // 是否提取 CSS到单独文件
  //   extract: true,
  //   // 是否使用POSTCSS
  //   usePostCSS: true

  // }
  options = options || {}

  const cssLoader = {
    loader: 'css-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  const postcssLoader = {
    loader: 'postcss-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  // generate loader string to be used with extract text plugin
  // 创建对应的loader配置 
  function generateLoaders (loader, loaderOptions) {

    const loaders = options.usePostCSS ? [cssLoader, postcssLoader] : [cssLoader]

    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        //合并 loaderOptions 生成options
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }

    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (options.extract) {
      // 如果提取使用ExtractTextPlugin插件提取
      return ExtractTextPlugin.extract({
        //loader被用于将资源转换成一个CSS导出模块必填
        use: loaders,
        // 当CSS没有被提取，额外的LOADER 
        fallback: 'vue-style-loader'
      })
    } else {
      return ['vue-style-loader'].concat(loaders)
    }
  }

  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    //语法缩进格式
    // #main
    //    color: blue
    //    font-size: 0.3em
    sass: generateLoaders('sass', { indentedSyntax: true }),
    // scss: generateLoaders('sass'),
    scss: generateLoaders('sass').concat(
      {
        loader: 'sass-resources-loader',
        options: {
          resources: path.resolve(__dirname, '../public/css/remo-ui.scss') //自定义文件名
        }
      }
    ),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
}

// Generate loaders for standalone style files (outside of .vue)
// 最终会返回webpack css相关的设置
exports.styleLoaders = function (options) {
  const output = []
  const loaders = exports.cssLoaders(options)

  for (const extension in loaders) {
    const loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }

  return output
}

// NPM RUN DEV出错时， FriendErrorsPlugin onError输出错误
exports.createNotifierCallback = () => {
  const notifier = require('node-notifier')

  return (severity, errors) => {
    if (severity !== 'error') return

    const error = errors[0]
    const filename = error.file && error.file.split('!').pop()

    notifier.notify({
      title: packageConfig.name,
      message: severity + ': ' + error.name,
      subtitle: filename || '',
      icon: path.join(__dirname, 'logo.png')
    })
  }
}

const fs = require('fs')
const join = path.join
const resolve = (dir) => path.join(__dirname, '../', dir)

exports.getComponentEntries = (path) => {
  let files = fs.readdirSync(resolve(path));
  const componentEntries = files.reduce((ret, item) => {
    const itemPath = join(path, item)
    const isDir = fs.statSync(itemPath).isDirectory();
    if (isDir) {
      ret[item] = resolve(join(itemPath, 'index.js'))
    } else {
      const [name] = item.split('.')
      ret[name] = resolve(`${itemPath}`)
    }
    return ret
  }, {})
  console.dir(componentEntries)
  return componentEntries
}