/*
* @Author: liyunjiao
* @Date:   2018-06-05 17:26:40
* @Last Modified by:   liyunjiao2048@163.com
* @Last Modified time: 2018-12-11 15:23:49
*/

import Home from './page/home';
import Detail from './page/detail';
import Layout from './page/layout';
import Children1 from './page/other/children1';
import Children2 from './page/other/children2';
import CTest from './page/ctest';
import tcm from './page/create';

// 动态加载组件
// const Detail = () => import('./page/detail');
// const Layout = () => import('./page/layout');
// const Children1 = () => import('./page/other/children1');
// const Children2 = () => import('./page/other/children2');

import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
export default new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        { path: '/', component: Home, name:'home'},
        { name:'detail',path: '/detail/:pid', component: Detail },
        { path: '/ctest',component:CTest,name:'ctest'},
        { path: '/tcm',component:tcm,name:'tcm'},
        {
            path:'/other',
            component:Layout,
            children:[
                {path:'children1',component:Children1,name:'children1'},
                {path:'children2',component:Children2,name:'children2'}
            ]
        }
    ]
})