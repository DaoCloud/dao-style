const Webpack = require('webpack');
const Merge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const webpackBaseConfig = require('./webpack.base.config.js');
const utils = require('./utils');

module.exports = Merge(webpackBaseConfig, {
  mode: 'production',
  entry: {
    main: utils.genPath('src/index.js'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: utils.styleLoaders({
          sourceMap: false,
          minimize: true,
          extract: true,
        }),
      },
    ],
  },
  output: {
    path: utils.genPath('dist'),
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
      from: utils.genPath('src/components/dao-color.scss'),
      to: utils.genPath('dist/styles/dao-color.scss'),
    }, {
      from: utils.genPath('package.json'),
      to: utils.genPath('dist/package.json'),
    }, {
      from: utils.genPath('README.md'),
      to: utils.genPath('dist/README.md'),
    }]),
    new ExtractTextPlugin('styles/dao-style.css'),
  ],
});
