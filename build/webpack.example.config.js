const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Merge = require('webpack-merge');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const webpackBaseConfig = require('./webpack.base.config.js');
const utils = require('./utils');

const config = Merge(webpackBaseConfig, {
  mode: !utils.isProduction ? 'development' : 'production',
  devtool: !utils.isProduction ? '#source-map' : false,
  entry: {
    main: utils.resolve('examples/main'),
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: utils.styleLoaders({
        sourceMap: !utils.isProduction,
        minimize: utils.isProduction,
        extract: true,
      }),
    }],
  },
  output: {
    path: utils.resolve('examples/dist'),
    publicPath: '',
    filename: utils.isProduction ? 'js/[name].[chunkhash].js' : 'js/[name].js',
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
    new HtmlWebpackPlugin({
      inject: true,
      filename: utils.resolve('examples/dist/index.html'),
      template: utils.resolve('examples/index.html'),
    }),
    new FriendlyErrorsPlugin(),
    new ExtractTextPlugin(utils.isProduction ? 'css/[name].[md5:contenthash:hex:20].css' : 'css/[name].css'),
  ],
});

if (!utils.isProduction) {
  config.devServer = {
    open: true,
    port: 8081,
    host: '0.0.0.0',
    quiet: true,
    contentBase: false,
    compress: true,
  };
  config.plugins.push(new FriendlyErrorsWebpackPlugin());
}

module.exports = config;
