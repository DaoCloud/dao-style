/**
 * 公共配置
 */
const webpack = require('webpack');
const path = require('path');

const vueLoaderConfig = require('./vue-loader.conf')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

function getStyleLoaders(type) {
  const uses = ['style-loader'];
  const styleLoaders = vueLoaderConfig.loaders[type].filter(l => l !== 'vue-style-loader');
  styleLoaders.forEach(loader => {
    uses.push(loader);
  });
  return uses;
}

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
        use: getStyleLoaders('css'),
      }, {
        test: /\.less$/,
        use: getStyleLoaders('less'),
      }, {
        test: /\.scss$/,
        use: getStyleLoaders('scss'),
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
