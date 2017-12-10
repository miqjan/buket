const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const modules = require('./webpack.config.modules');

const publicPath = '/';
const srcPath = path.join(__dirname, 'src');
const outputPath = path.resolve(__dirname, 'public');

const config = {
    entry: [
        path.join(srcPath, 'index.jsx'),
    ],

    output: {
        path: outputPath,
        publicPath: publicPath,
        filename: 'bundle-[hash].js',
    },
    module:modules,
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'developmant'),
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'index.html'),
            
        }),
    ],
    devServer: {
        port: 3000,
        host: '0.0.0.0',
        disableHostCheck: true,
        historyApiFallback: true,
    },
};
module.exports = config;