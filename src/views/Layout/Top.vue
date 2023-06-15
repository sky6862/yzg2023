<template>
    <header>
        顶部
        <!--m02:定义单选按钮，获取选中的值 -->
        <el-radio-group 
        v-model="isCollapse" 
        style="margin-bottom: 20px"
        @change="toggleMenu"
        >
            <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
        是否折叠：{{isCollapse}}
    </header>
</template>

<script>
    export default {
    name: 'Layout',
    // Your component logic here
    }
</script>
<script setup>
    import { ref } from "vue";
    import {useStore} from 'vuex';
    import HelloWorld from '../../components/HelloWorld'
    
    // m04: 获取store
    const store = useStore();
    let msg = ref("")
    // setup 语法糖，是一种简写形式，让开发更快
    // 1.函数，变量,import 内容，直接在模板中使用
    const handleClick = ()=>{
        alert(666)
    }
    // 2.可以和 script 标签共存
    // 3.有些方法不能在setup语法糖实现，还是要在script标签中实现(vuex中的辅助函数)
    // 4.和ts结合后，使用方式上略有不同：https://cn.vuejs.org/api/sfc-script-setup.html#typescript-only-features

    // m03: 折叠、显示菜单
    let isCollapse = ref(false)
    const toggleMenu = (val)=>{
        console.log(`当前选中的是:${val}`)
        // m05: 除非修改
        store.dispatch("CHANGECollapse",val)
    }
</script>

<style scoped>
/* Your component styles here */
header{
    background-color:yellowgreen;
    width: 100%;
}
</style>