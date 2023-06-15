<template>
    <div class="wrap">
        <!-- 左侧 -->
        <Left class="menu" v-bind:class="collapse_menu==true ? 'hide':''"></Left>
        <!-- 右侧 -->
        <div class="right">
            <!-- 右上 -->
            <Top></Top>
            <!-- 右侧内容，动态变化的，放router-view -->
            <router-view></router-view>
        </div>
    </div>
    
</template>

<script>
    import Left from "./Left";
    import Top from "./Top";
    import {mapState} from 'vuex'

    //创建一个异步组件 
    export default {
        name: 'Layout',
        // Your component logic here
        components:{
            Left,
            Top
        },
        computed:{
            ...mapState(['collapse_menu'])
        }
    }
</script>

<style scoped>
/* m08:布局宽度 */
/* Your component styles here */
.wrap{
    display: flex;
}

/* 后台大盒子，分左右布局 */
.wrap .menu{
    flex-basis: 200px;
}

/* 折叠的时候，左边宽 */
.wrap .menu.hide{
    flex-basis:0;
}

/* 折叠的时候，右边宽，有多的空间，则自动占满 */
.wrap .right{
    flex-grow: 1;
}
</style>