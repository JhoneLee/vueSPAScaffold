/*
* @Author: liyunjiao
* @Date:   2018-06-11 18:01:31
* @Last Modified by:   liyunjiao2048@163.com
* @Last Modified time: 2018-11-23 14:55:11
*/

var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var htmlWebpackPlugin = require('html-webpack-plugin');
// var VueLoaderPlugin = require('vue-loader/lib/plugin');  // vue-loader 升级15.x时配置
module.exports = {
    devtool: false,
    mode:'production',
    entry: {
        main:'./src/main.js',
        // vendorVue: ['vue'],
        // vendorVuex:['vuex'],
        // vendorRouter:['vue-router']
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '',
        filename: './[name].[chunkhash:8].js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    extractCSS: true,
                    // loaders: {
                    //     less: ExtractTextPlugin.extract({
                    //         use:'css-loader!less-loader',
                    //         fallback:'vue-style-loader'
                    //     })
                    // }
                }
            },{
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },{
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            },{
                test: /\.less$/,
                use: [
                  'vue-style-loader',
                  'css-loader',
                  'less-loader'
                ]
            }
        ]
    },
    plugins:[
        new ExtractTextPlugin('less.css'),
        // new VueLoaderPlugin(), // 同上
        new htmlWebpackPlugin({
            title: 'hehe',
            template: path.join(__dirname, '../index.html'),
            filename: './index.html',
            chunks:['main']
        })
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js',
            Components: path.resolve(__dirname, '../src/components/')
        },
        extensions: ['.js', '.vue','.less']
    },
    optimization: {
        // runtimeChunk: {
        //     name: "manifest"
        // },
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendor",
                    chunks: "all"
                }
            }
        }
    },
    performance: {
        hints: false
    }
}