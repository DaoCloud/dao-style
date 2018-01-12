const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base.config.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// TODO
// 1. 按模块加载
// 2. extract + post css

process.env.NODE_ENV = 'production';

const plugins = [
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"production"'
    }),
    
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }),
];
if (process.env.BUNDLE_ANALYZ) {
    plugins.push(new BundleAnalyzerPlugin());
}

module.exports = merge(webpackBaseConfig, {
    entry: {
        main: './src/index.js'
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
    plugins,
});
