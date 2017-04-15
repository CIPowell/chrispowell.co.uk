var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './app/scripts/app.js',
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
            filename: 'style/style.css',
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            title: 'Chris I Powell',
            template: './app/assets/index.html'
        })
    ],
    output: {
        filename: 'js/bundle.js',
        path: path.resolve(__dirname, 'public')
    }
}
