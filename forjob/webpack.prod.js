const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
    devtool: 'source-map',
    plugins: [
        //uglifyjs插件默认集成不用安装，用于压缩js代码
        new UglifyJSPlugin({
            sourceMap: true
        }),
        //许多library将通过与process.env.NODE_ENV环境变量关联，以决定library中应该引用哪些内容
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
});