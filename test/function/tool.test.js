/*
* @Author: liyunjiao2048@163.com
* @Date:   2019-05-05 15:12:59
* @Last Modified by:   liyunjiao2048@163.com
* @Last Modified time: 2019-05-05 16:57:21
*/


import {serialize} from '@/utils/tools';

test('serialize function is correct',()=>{
    expect(serialize({name:'江山',age:14})).toBe('name=%E6%B1%9F%E5%B1%B1&age=14')
})