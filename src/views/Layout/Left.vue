<template>
  <div>
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
      <el-radio-button :label="false">expand</el-radio-button>
      <el-radio-button :label="true">collapse</el-radio-button>
    </el-radio-group>

    <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse" @open="handleOpen"
      @close="handleClose" router>
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
import { ref } from 'vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

const isCollapse = ref(false) //是否折叠，默认否
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style scoped>
/* Your component styles here */
</style>