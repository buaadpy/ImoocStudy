const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const ExtractPlugin = require('extract-text-webpack-plugin')
module.exports = {
    entry: path.resolve(__dirname, 'src/main.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {presets: ['@babel/preset-env']}
            }
        }, {
            test: /\.css$/,
            use: ExtractPlugin.extract({fallback: "style-loader",use: "css-loader"}),
        }, {
            test: /\.vue$/,
            use: 'vue-loader',
        }, {
            test: /\.(png|svg|jpg)$/,
            use: [{
                loader: 'url-loader',
                options: {limit: 1024,name: '[name].[ext]'}
            }],
        }]
    },
    plugins: [
        new VueLoaderPlugin(), new CleanWebpackPlugin(), new HtmlWebpackPlugin(), new ExtractPlugin("index.css")
    ]
}