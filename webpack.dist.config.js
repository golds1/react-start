// configuration for production environment
var path = require('path');
var webpack = require('webpack');

module.exports = {
    // devtool: 'eval',
    entry: [
        './src/app'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    plugins: [
        new webpack.NoErrorsPlugin()
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['babel?optional[]=runtime&stage=0'],
            include: path.join(__dirname, 'src')
        }]
    }
};