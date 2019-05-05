<template>
  <div>
    <h1>请求相关测试</h1>
    <button @click="btnClick">点击发请求</button>
  </div>
</template>

<script>
import request from 'superagent';
export default {
    name:'ctest',
    data(){
        return {
            token:null
        }
    },
    components: {
        
    },
    computed:{
       
    },
    beforeCreate(){
        console.log('init Events & lifecycle complete!');
        request.get('http://localhost:8686/api/regtech/ctest').withCredentials().then(s=>{
            this.token = s.body.data.token;
        },e=>{
            console.log('error',e);
        });
    },
    created(){
        console.log('实例已经创建完成之后被调用');
       
    },
    beforeMount(){
        console.log('在挂载开始之前被调用');
    },
    mounted(){
        console.log('实例已挂载');
    },
    beforeUpdate(){
        console.log('数据更新前');
    },
    updated(){
        console.log('数据更新后');
    },
    beforeDestroy(){
        console.log('组件销毁之前');
    },
    activated(){
        console.log('keep-alive组件激活时调用');
    },
    deactivated(){
        console.log('keep-alive组件停用时调用');
    },
    destroyed(){
        console.log('组件销毁之后');
    },
    methods:{
       btnClick(){
            request.get('http://localhost:8686/api/regtech/data/platform').withCredentials().query(
                    // {token:this.token}
                    {token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE1NDQ0MzE3NDIsImV4cCI6MTU0NDQzNTM0Miwic3ViIjoidGVzdCJ9.ob-Ip4N0xyxttqPtrv_80iXX5saR5UkU9QqZV-kkIwM'}
                ).then(s=>{
                console.log('success');
            },e=>{
                console.log('error',e);
            })
       }
    }
}
</script>

<style lang="less" scoped>
  h1 {
    background-color: #888;
    color:white;
  }
</style>