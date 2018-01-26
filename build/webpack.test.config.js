const webpack = require('webpack');
const merge = require('webpack-merge');

const webpackBaseConfig = require('./webpack.base.config.js');
const utils = require('./utils');

const webpackConfig = merge(webpackBaseConfig, {
  // use inline sourcemap for karma-sourcemap-loader
  devtool: '#inline-source-map',
  module: {
    rules: [{
      test: /\.scss$/,
      use: utils.styleLoaders({
        // 暂时没有把CSS单独打包，设置成 false
        sourceMap: false,
        extract: false,
        usePostCSS: true,
        minimize: false,
        fallback: 'style-loader',
      }),
    }],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"testing"'
      }
    })
  ]
})

// no need for app entry during tests
delete webpackConfig.entry

module.exports = webpackConfig
