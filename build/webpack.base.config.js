/**
 * 公共配置
 */
var webpack = require('webpack');
var path = require('path');

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  // 加载器
  module: {
    // https://doc.webpack-china.org/guides/migrating/#module-loaders-module-rules
    rules: [{
        // https://vue-loader.vuejs.org/en/configurations/extract-css.html
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: 'vue-style-loader!css-loader',
            less: 'vue-style-loader!css-loader!less-loader',
            scss: 'vue-style-loader!css-loader!sass-loader',
            sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          },
          postLoaders: {
            html: 'babel-loader'
          }
        }
      }, {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }, {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'autoprefixer-loader'
        ]
      }, {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      }, {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader?sourceMap'
        ]
      }, {
        test: /\.svg$/,
        loader: 'svg-sprite-loader?' + JSON.stringify({
          name: '[name]',
          prefixize: true,
          regExp: '../src/components/dao-svg/**/(.*)\\.svg'
        }),
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
