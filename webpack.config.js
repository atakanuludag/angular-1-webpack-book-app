const webpack               = require('webpack');
const path                  = require('path');
const hwp                   = require('html-webpack-plugin');
const CleanWebpackPlugin    = require('clean-webpack-plugin');

let cleanFolder = [
    'dist'
];

module.exports = {
    mode: 'development',
    entry: './app/app.module.js',
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle-[hash].js',
        chunkFilename: 'vendor-[hash].js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['*', '.js']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.html$/,
                use: [ {
                  loader: 'html-loader',
                  options: {
                    minimize: true,
                    removeComments: true
                  }
                }],
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                use: 'file-loader',
            },
        ]
    },
    
    devServer: {
        historyApiFallback: true,
    },
    plugins:[
        new CleanWebpackPlugin(cleanFolder),
        new hwp({template:path.join(__dirname, '/index.html')})
    ]
};