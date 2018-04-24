const ExtractTextPlugin = require('extract-text-webpack-plugin');


exports.styleLoaders = function (options) {
  options = options || {}

  const cssLoader = {
    loader: 'css-loader',
    options: {
      sourceMap: options.sourceMap,
      minimize: options.minimize
    }
  }

  const postcssLoader = {
    loader: 'postcss-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  const sassLoader = {
    loader: 'sass-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  function generateLoaders (loader, loaderOptions) {
    const loaders = options.usePostCSS ? [cssLoader, postcssLoader, sassLoader]
      : [cssLoader, sassLoader]

    if (options.extract) {
      return ExtractTextPlugin.extract({
        fallback: options.fallback,
        use: loaders
      })
    } else {
      return [options.fallback].concat(loaders);
    }
  }

  return generateLoaders('sass');
}
