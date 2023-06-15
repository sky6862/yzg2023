<template>
  <div class="menu_box">
    <!-- 
      radio-button用法：
      https://element-plus.org/zh-CN/component/radio.html#%E7%A6%81%E7%94%A8%E7%8A%B6%E6%80%81
     -->
    <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group> -->
    <el-menu 
      default-active="2" 
      class="el-menu-vertical-demo" 
      :collapse="isCollapse" 
      @open="handleOpen"
      @close="handleClose" 
      router
      v-bind:class="isCollapse?hide:''"
    >
      <el-menu-item index="/">
        <el-icon><icon-menu /></el-icon>
        <template #title>首页</template>
      </el-menu-item>

      <el-sub-menu index="/account">
        <template #title>
          <el-icon>
            <location />
          </el-icon>
          <span>账号管理</span>
        </template>

        <el-menu-item-group>
          <el-menu-item index="/account/account_list">账号列表</el-menu-item>
          <el-menu-item index="/account/account_add">账号添加</el-menu-item>
        </el-menu-item-group>

      </el-sub-menu>

    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { ref,computed,toRef} from 'vue'
import {useStore} from 'vuex'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

// const isCollapse = ref(false) //是否折叠，默认否
// m01:交给store中数据来控制，为是两个页面(组件)来控制的
let store = useStore()
// 使用计算属性，简化写法
let isCollapse = computed(()=>store.state.collapse_menu)

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style scoped>
/* m07:菜单宽度 */
/* 修改菜单宽度 */
.el-menu{
  width: 200px;
  border:0;
}

/* 折叠的时候宽度 */
.hide .el-menu{
  width: 64px;
}
</style>