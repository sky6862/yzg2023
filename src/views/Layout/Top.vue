<template>
    <div>
       上边<br>
       <input type="text" v-model="msg">{{ msg }}
       <p @click="handleClick">点我</p>
       <HelloWorld></HelloWorld>
    </div>
</template>

<script>
    export default {
    name: 'Layout',
    // Your component logic here
    }
</script>
<script setup>
    import { ref } from "vue";
    import HelloWorld from '../../components/HelloWorld'
    let msg = ref("")
    // setup 语法糖，是一种简写形式，让开发更快
    // 1.函数，变量,import 内容，直接在模板中使用
    const handleClick = ()=>{
        alert(666)
    }
    // 2.可以和 script 标签共存
    // 3.有些方法不能在setup语法糖实现，还是要在script标签中实现(vuex中的辅助函数)
    // 4.和ts结合后，使用方式上略有不同：https://cn.vuejs.org/api/sfc-script-setup.html#typescript-only-features
</script>

<style scoped>
/* Your component styles here */
</style>