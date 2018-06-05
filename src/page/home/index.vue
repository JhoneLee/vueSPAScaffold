<template>
  <div>
    <Title/>
    <h1>我是首页</h1>
  </div>
</template>

<script>
import Title from ''
export default {
    name:'Home',
    components: {
        Title
    },
    computed:{
        console.log('computed');
    },
    created(){
        console.log('computed');
    },
    methods:{
        
    }
}
</script>

<style lang="less" scoped>
  h1 {
    background-color: #888;
    color:white;
  }
</style>