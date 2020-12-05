'use strict'
const utils = require('./utils')
const config = require('../config')
const isProduction = process.env.NODE_ENV === 'production'
const sourceMapEnabled = isProduction
  // 这里是true
  ? config.build.productionSourceMap
  // 这里是true
  : config.dev.cssSourceMap

module.exports = {
  // cssLoaders, 生成相应的loader配置，具体看unitls文件中的cssloader
  loaders: utils.cssLoaders({
    // 是否开启sourceMap 便于调试
    // 生产环境True 就有CSSMAP
    sourceMap: sourceMapEnabled,
    // 是否提取vue单文件的CSS
    // 生产环境就CSS到单独文件
    extract: isProduction
  }),
  cssSourceMap: sourceMapEnabled,
  // 这里是true
  // 缓存破坏， 进行sourceMap DEBUG时设置成false很有帮助
  cacheBusting: config.dev.cacheBusting,
  // Vue单文件中，在模板中的图片等资源引用转成require形式。以便目标资源可以由webpack处理
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    //默认转换<img>的src属性和<svg>的
    image: 'xlink:href'
  }
}
