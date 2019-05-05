/*
* @Author: liyunjiao2048@163.com
* @Date:   2019-05-05 16:11:39
* @Last Modified by:   liyunjiao2048@163.com
* @Last Modified time: 2019-05-05 17:11:56
*/



let opt = {
    "presets": ["env"]
}

const bj = require('babel-jest');

module.exports = bj.createTransformer(opt);
