const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Merge = require('webpack-merge');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const webpackBaseConfig = require('./webpack.base.config.js');
const utils = require('./utils');

const config = Merge(webpackBaseConfig, {
  devtool: !utils.isProduction ? '#source-map' : false,
  entry: {
    main: utils.resolve('examples/main'),
    vendors: ['vue', 'vue-router'],
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: utils.styleLoaders({
        sourceMap: !utils.isProduction,
        minimize: utils.isProduction,
      }),
    }],
  },
  output: {
    path: utils.resolve('examples/dist'),
    publicPath: '',
    filename: utils.isProduction ? 'js/[name].[chunkhash].js' : 'js/[name].js',
    chunkFilename: utils.isProduction ? 'js/[id].[chunkhash].js' : 'js/[id].js',
  },
  resolve: {
    alias: {
      daoStyle: utils.resolve('src/index'),
      vue: 'vue/dist/vue.js',
    },
  },
  stats: {
    // clean useless log from ExtractTextPlugin
    children: false,
  },
  plugins: [
    new Webpack.DefinePlugin({
      'process.env.NODE_ENV': utils.isProduction ?
        JSON.stringify('production') : JSON.stringify('development'),
    }),
    new Webpack.optimize.CommonsChunkPlugin({
      name: 'vendors',
      filename: 'js/vendor.bundle.js',
    }),
    new HtmlWebpackPlugin({
      inject: true,
      filename: utils.resolve('examples/dist/index.html'),
      template: utils.resolve('examples/index.html'),
    }),
    new FriendlyErrorsPlugin(),
    new ExtractTextPlugin(utils.isProduction ? 'css/[name].[contenthash].css' : 'css/[name].css'),
  ],
});

if (utils.isProduction) {
  config.plugins.push(new Webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
    },
  }));
} else {
  config.devServer = {
    open: true,
    port: 8081,
    host: '0.0.0.0',
    quiet: true,
    contentBase: false,
    compress: true,
  };
}

module.exports = config;
