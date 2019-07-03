const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const ExtractPlugin = require('extract-text-webpack-plugin')

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: ExtractPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                  }),
            }, {
                test: /\.vue$/,
                use: 'vue-loader',
            }, {
                test: /\.(png|svg|jpg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 1024,
                        name: '[name].[ext]'
                    }
                }],
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(), new CleanWebpackPlugin(), new webpack.HotModuleReplacementPlugin(), new HtmlWebpackPlugin(),new ExtractPlugin("index.css")
    ],
    devServer: {
        contentBase: './dist',
        hot: true,
    }
}