'use strict'
// 检查node npm版本
require('./check-versions')()

process.env.NODE_ENV = 'production'

// 命令行中的loading
const ora = require('ora')
// 删除文件或文件夹
const rm = require('rimraf')
// 路径相关的
const path = require('path')
// 控制台输入样式
const chalk = require('chalk')
// 引入webpack
const webpack = require('webpack')
// 引入配置文件
const config = require('../config')
// 引入 生产环境webpack配置
const webpackConfig = require('./webpack.prod.conf')

// 控制台输出开始构建 loading
const spinner = ora('building for production...')
spinner.start()

// 删除原有的构建文件夹 /dist 和/assets 
rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  //  如果出错报错
  if (err) throw err
  // 开始打包
  webpack(webpackConfig, (err, stats) => {
    // 停止loding
    spinner.stop()
    //  如果出错报错
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    //  如果出错控制台报错终止
    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }
    // 没报错控制体输出构建成功相关信息
    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})
