/**
 * 公共配置
 */
const webpack = require('webpack');
const path = require('path');
const utils = require('./utils');
const vueLoaderConfig = require('./vue-loader.conf')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

const styleLoadersConfig = utils.cssLoaders({
  sourceMap: process.env.NODE_ENV !== 'production',
  extract: false,
  usePostCSS: true,
  forVue: false,
});

module.exports = {
  // 加载器
  module: {
    // https://doc.webpack-china.org/guides/migrating/#module-loaders-module-rules
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig,
      }, {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }, {
        test: /\.css$/,
        use: styleLoadersConfig.css,
      }, {
        test: /\.less$/,
        use: styleLoadersConfig.less,
      }, {
        test: /\.scss$/,
        use: styleLoadersConfig.scss,
      }, {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
      },
      { test: /\.(gif|jpg|png|woff|eot|ttf)\??.*$/, loader: 'url-loader?limit=8192' },
      { test: /\.(html|tpl)$/, loader: 'html-loader' }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      'vue': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      daoColor$: resolve('src/components/dao-color.scss'),
    }
  }
};
