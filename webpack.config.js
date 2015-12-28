var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        //'eventsource-polyfill', // necessary for hot reloading with IE
        'webpack/hot/dev-server',
        './src/index'
    ],
    output: {
        path: './dist',
        filename: 'bundle.js',
        publicPath: '/',
        externals: {
            react: 'react',
            'react/addons': 'react'
        }

    },
    devServer: {
        inline: true,
        contentBase: './dist'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
        }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'Reactjs playground',
            template: 'index.html'
        }),
        new webpack.NoErrorsPlugin()
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: "babel",
            exclude: /(node_modules|bower_components)/,
            query: {
                presets: ['react', 'es2015'],
                plugins: ['transform-runtime']
            }
        },
            {
                test: /\.css$/,
                loader: 'style!css'
            }]
    }
};