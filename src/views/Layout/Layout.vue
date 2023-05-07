<template>
    <div>
        <Left></Left>
        <Top></Top>
        <!-- 右侧内容，动态变化的，放router-view -->
        <router-view></router-view>
    </div>
</template>

<script>
    import Left from "./Left";
    import Top from "./Top";

    //创建一个异步组件 
    export default {
        name: 'Layout',
        // Your component logic here
        components:{
            Left,
            Top
        }
    }
    
    
</script>

<style scoped>
/* Your component styles here */
</style>