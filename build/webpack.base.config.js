const vueLoaderConfig = require('./vue-loader.conf');
const utils = require('./utils');

utils.checkVersion();

module.exports = {
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
      options: vueLoaderConfig,
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    }, {
      test: /\.svg$/,
      loader: 'svg-sprite-loader',
    },
    {
      test: /\.(gif|jpg|png|woff|eot|ttf)\??.*$/,
      loader: 'url-loader?limit=8192',
    },
    {
      test: /\.(html|tpl)$/,
      loader: 'html-loader',
    }],
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      vue: 'vue/dist/vue.esm.js',
      '@': utils.resolve('src'),
      daoColor$: utils.resolve('src/components/dao-color.scss'),
    },
  },
};
