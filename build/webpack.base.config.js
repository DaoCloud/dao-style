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
      // for dep
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      options: {
        cacheDirectory: true,
        presets: [
          ['env', {
            targets: {
              browsers: [
                'Firefox > 27',
                'Chrome > 29',
                'not ie < 11',
              ],
            },
            modules: false,
            useBuiltIns: 'usage',
          }],
        ],
      },
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
      '@': utils.genPath('src'),
      '@demos': utils.genPath('examples/view/demos'),
      daoColor: utils.genPath('src/components/dao-color.scss'),
    },
  },
};
