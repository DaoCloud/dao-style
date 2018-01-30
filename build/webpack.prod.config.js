const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpackBaseConfig = require('./webpack.base.config.js');
const utils = require('./utils');

module.exports = merge(webpackBaseConfig, {
    entry: {
      main: './src/index.js'
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: utils.styleLoaders({
            sourceMap: false,
            extract: true,
            usePostCSS: true,
            minimize: true,
            fallback: 'style-loader',
          }),
        }
      ],
    },
    output: {
      path: path.resolve(__dirname, '../dist'),
      publicPath: '/dist/',
      filename: 'dao-style.min.js',
      library: 'dao-style',
      libraryTarget: 'umd',
      umdNamedDefine: true
    },
    externals: {
      vue: {
        root: 'Vue',
        commonjs: 'vue',
        commonjs2: 'vue',
        amd: 'vue'
      }
    },
    stats: {
      // clean useless log from ExtractTextPlugin
      children: false  
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"production"'
      }),
      new CopyWebpackPlugin([{
        from: path.resolve(__dirname, '../src/components/dao-color.scss'), 
        to: path.resolve(__dirname, '../dist/styles/dao-color.scss'),
      }]),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
      new ExtractTextPlugin("styles/dao-style.css"),
    ]
});
