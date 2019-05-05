/*
* @Author: liyunjiao2048@163.com
* @Date:   2019-05-05 14:31:02
* @Last Modified by:   liyunjiao2048@163.com
* @Last Modified time: 2019-05-05 17:12:04
*/

var path = require('path');
module.exports = {
    // 单元测试环境根目录
    rootDir:path.resolve(__dirname,'../'),
    // 匹配需要进行单元测试的文件
    testMatch:[
        '<rootDir>/test/**/*.js'
    ],
    // 需要忽略的文件
    testPathIgnorePatterns:[
        '<rootDir>/node_modules'
    ],
    testURL:'http://localhost:4343/',
    collectCoverage:true,
    coverageDirectory:path.resolve(__dirname,'../coverage'),
    setupFilesAfterEnv:[path.resolve(__dirname,'./jest.setup.js')],
    moduleFileExtensions: ["js", "json","vue"],
    moduleNameMapper: {
      // 对css less等非js文件进行忽略
      "^.+\\.(css|less)$": "<rootDir>/config/cssSetup.js",
      // 配置webpack别名
      "^@/(.*)$":"<rootDir>/src/$1"
    },
    transform:{
        ".*\\.(vue)$":"vue-jest",
        "^.+\\.js$":"<rootDir>/config/babelJestConfig.js"
    },
    transformIgnorePatterns:[`/node_modules/`]
}


