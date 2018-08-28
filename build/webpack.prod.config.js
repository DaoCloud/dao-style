const Webpack = require('webpack');
const Merge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const webpackBaseConfig = require('./webpack.base.config.js');
const utils = require('./utils');

module.exports = Merge(webpackBaseConfig, {
  entry: {
    main: utils.resolve('src/index.js'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: utils.styleLoaders({
          sourceMap: false,
          minimize: true,
        }),
      },
    ],
  },
  output: {
    path: utils.resolve('dist'),
    publicPath: '/dist/',
    filename: 'dao-style.min.js',
    library: 'dao-style',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue',
    },
  },
  stats: {
    // clean useless log from ExtractTextPlugin
    children: false,
  },
  plugins: [
    new Webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
    }),
    new CopyWebpackPlugin([{
      from: utils.resolve('src/components/dao-color.scss'),
      to: utils.resolve('dist/styles/dao-color.scss'),
    }]),
    new Webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
    new ExtractTextPlugin('styles/dao-style.css'),
  ],
});
