const Webpack = require('webpack');
const Merge = require('webpack-merge');

const webpackBaseConfig = require('./webpack.base.config.js');
const utils = require('./utils');

const webpackConfig = Merge(webpackBaseConfig, {
  // use inline sourcemap for karma-sourcemap-loader
  devtool: '#inline-source-map',
  module: {
    rules: [{
      test: /\.scss$/,
      use: utils.styleLoaders({
        sourceMap: false,
        minimize: false,
      }),
    }],
  },
  plugins: [
    new Webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"testing"',
      },
    }),
  ],
});

// no need for app entry during tests
delete webpackConfig.entry;

module.exports = webpackConfig;
