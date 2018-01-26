const utils = require('./utils')
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  loaders: {
    scss: utils.styleLoaders({
      // 暂时没有把CSS单独打包，设置成 false
      sourceMap: !isProduction,
      extract: isProduction,
      usePostCSS: true,
      minimize: false,
      fallback: 'vue-style-loader',
    })
  },
  cssSourceMap: !isProduction,
  cacheBusting: isProduction,
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}
