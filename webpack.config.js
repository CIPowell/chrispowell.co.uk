var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './themes/chrisipowell/static/js/main.js',
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders: ExtractTextPlugin.extract('css-loader!sass-loader')
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: 'node_modules'
            },{
                test: /\.tpl$/,
                loader: 'ngtemplate-loader?relativeTo=' + (path.resolve(__dirname, './app')) + '/!html-loader'
            }, {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'css/main.css',
            allChunks: true
        })
    ],
    output: {
        filename: 'js/main.js',
        path: path.resolve(__dirname, 'themes/chrisipowell/static')
    }
}
