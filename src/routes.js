/*
* @Author: liyunjiao
* @Date:   2018-06-05 17:26:40
* @Last Modified by:   liyunjiao
* @Last Modified time: 2018-06-05 17:57:16
*/

import Home from './page/home';
import VueRouter from 'vue-router';
export default new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        { path: '/', component: Home }
    ]
})