/**
* @file : 利用render渲染组件
* @Author: liyunjiao2048@163.com
* @Date:   2018-12-11 14:12:50
* @Last Modified by:   liyunjiao2048@163.com
* @Last Modified time: 2018-12-11 16:31:53
*/

/*eslint-disable*/

import Vue from 'vue';

// Vue.component('test-component',{
//     render(h){
//         return h('h1',['纯js渲染组件',this.$props.num])
//     },
//     props:{
//         num:{
//             type:Number,
//             required:true
//         }
//     }
// });

// let tc = {
//     render(h){
//         return h('h1','纯js渲染组件')
//     }
// };

// export default {
//     name:'tcm',
//     template:'<div><span>孩子1</span></div>',
//     render(h,ctx){
//         console.log(this.$children)
//         // this.$children.push('<h2>孩子1</h2>');
//         // return h('div',['哈哈',h(tc),this.$children]);
//         return h('div',['哈哈',h('test-component',{
//             props:{
//                 num:100
//             }
//         }),this.$children]);
//     }
// }


Vue.component('component-b',{
    props:{
        foo:{
            type:String,
            required:true
        }
    },
    render(h){
        return h('div',['组件B',this.$props.foo])
    }
});

Vue.component('component-a',{
    render(h){
        return h('div',['组件A',h('component-b',{
            props:{
                foo:'bar'
            }
        })]);
    }
})

export default {
    name:'tcm',
    render(h){
        return h('div',[h('component-a')]);
    }
}
