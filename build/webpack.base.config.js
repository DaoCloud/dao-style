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
        use: [
          {
            loader: 'svg-sprite-loader'
          },
          {
            loader: 'svgo-loader',
            options: {
              plugins: [
                // 去除title
                { removeTitle: true },
                // 去除 换行，空格等
                { cleanupAttrs: true },
                // 去除注释
                { removeComments: true },
                // 去除 <desc>
                { removeDesc: true },
                // 去除没有 id 的 defs
                { removeUselessDefs: true },
                // 去除空属性
                { removeEmptyAttrs: true },
                // 去处隐藏的属性
                { removeHiddenElems: true },
                // 去除空文本节点
                { removeEmptyText: true },
                // 简化色值 #FFFFFF -> #FFF
                { convertColors: { shorthex: true } }
              ]
            }
          }
        ]
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
