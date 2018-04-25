const utils = require('./utils')
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  loaders: {
    scss: utils.styleLoaders({
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
