'use strict'
const utils = require('./utils')
const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  loaders: utils.cssLoaders({
    // 暂时没有把CSS单独打包，设置成 false
    sourceMap: false,
    extract: false,
    usePostCSS: true,
  }),
  cssSourceMap: isProduction,
  cacheBusting: isProduction,
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}
