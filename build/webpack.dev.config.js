const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

const webpackBaseConfig = require('./webpack.base.config.js');
const utils = require('./utils');

module.exports = merge(webpackBaseConfig, {
    devtool: '#inline-source-map',
    entry: {
      main: './examples/main',
      vendors: ['vue', 'vue-router']
    },
    module: {
      rules: [{
        test: /\.scss$/,
        use: utils.styleLoaders({
          sourceMap: true,
          extract: false,
          usePostCSS: true,
          minimize: false,
          fallback: 'style-loader',
        }),
      }],
    },
    output: {
      path: path.join(__dirname, '../examples/dist'),
      publicPath: '',
      filename: '[name].js',
      chunkFilename: '[name].chunk.js'
    },
    resolve: {
      alias: {
        daoStyle: '../../src/index',
        vue: 'vue/dist/vue.js'
      }
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({ name: 'vendors', filename: 'vendor.bundle.js' }),
      new HtmlWebpackPlugin({
          inject: true,
          filename: path.join(__dirname, '../examples/dist/index.html'),
          template: path.join(__dirname, '../examples/index.html')
      }),
      new FriendlyErrorsPlugin()
    ],
    devServer: {
      open: true,
      port: 8081,
      host: '0.0.0.0',
      quiet: true,
      contentBase: false,
      compress: true,
      compress: true,
    },
});
