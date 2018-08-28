const utils = require('./utils');

module.exports = {
  loaders: {
    scss: utils.styleLoaders({
      sourceMap: !utils.isProduction,
      minimize: utils.isProduction,
      fallback: 'vue-style-loader',
    }),
  },
  cssSourceMap: !utils.isProduction,
  cacheBusting: utils.isProduction,
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href',
  },
};
