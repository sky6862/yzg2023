<template>
  <div class="login">
      <div class="loginForm">
        <el-icon :size="20">
           <Search />
        </el-icon>

          <h2>登录</h2>
          <el-form :model="form" label-width="120px">

            <el-form-item label="Activity name">
              <el-input v-model="form.username"  :suffix-icon="Search"/>
            </el-form-item>
      
            <el-form-item label="Activity name">
              <el-input v-model="form.pwd" />
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="onSubmit">登录</el-button>
              <el-button>重置</el-button>
            </el-form-item>
        </el-form>
      </div>
  </div>
</template>

<script setup>
  import {reactive} from 'vue'
  import {Search} from '@element-plus/icons-vue'
  
  let form = reactive({
    username:"",
    pwd:""
  })

  const onSubmit = ()=>{
    console.log('准备登录')
  }
</script>

<style lang="less" scoped>
.login{
  height: 100vh;
  width: 100%;
  background: url(../assets/bg.png);
  background-size: cover;
}
</style>