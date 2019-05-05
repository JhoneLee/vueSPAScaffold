<template>
    <h1>
        我是title
        <slot></slot>
        <slot name="test"></slot>
    </h1>
</template>
<script>
    export default {

    }
</script>
<style lang="less">
    h1{
        color:red;
    }
</style>