/*
* @Author: liyunjiao
* @Date:   2018-06-05 16:21:04
* @Last Modified by:   liyunjiao
* @Last Modified time: 2018-06-11 16:00:37
*/

var webpack = require('webpack');
var path = require('path');
var config = require('./config');
let {entry} = config;
module.exports = {
    mode:'development',
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'build.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        less: 'vue-style-loader!css-loader!less-loader',
                        js:'babel-loader'
                    }
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
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js',
            Components: path.resolve(__dirname, '../src/components/')
        },
        extensions: ['.js', '.vue','.less']
    },
    devServer: {
        historyApiFallback: true,
        //noInfo: true
        inline: true,
        port:4343,
        host:'0.0.0.0'
    },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map'
}
 
// if (process.env.NODE_ENV === 'production') {
//     module.exports.devtool = '#source-map'
//     // http://vue-loader.vuejs.org/en/workflow/production.html
//     module.exports.plugins = (module.exports.plugins || []).concat([
//     new webpack.DefinePlugin({
//             'process.env': {
//                 NODE_ENV: '"production"'
//             }
//         }),
//     new webpack.optimize.UglifyJsPlugin({
//             sourceMap: true,
//             compress: {
//                 warnings: false
//             }
//         }),
//     new webpack.LoaderOptionsPlugin({
//             minimize: true
//         })
//     ])
// }