<template>
  <div class="login">
      <div class="loginForm">
        <el-icon :size="20">
           <Search />
        </el-icon>

          <h2>登录</h2>
          <el-form :model="form" label-width="120px"  ref="ruleFormRef">

            <el-form-item label="Activity name">
              <el-input v-model="form.account"  :suffix-icon="Search"/>
            </el-form-item>
      
            <el-form-item label="Activity name">
              <el-input v-model="form.password" />
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
              <el-button>重置</el-button>
            </el-form-item>
        </el-form>
      </div>
  </div>
</template>

<script setup lang="ts">
  import {reactive,ref,toRefs} from 'vue'
  import {Search} from '@element-plus/icons-vue'
  import type { FormInstance, FormRules } from 'element-plus'
  import {login} from '../api/account.js';
  
  let form = reactive({
    account:"",
    password:""
  })

  const ruleFormRef = ref<FormInstance>()
  const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    // 
    await formEl.validate(async (valid, fields) => {
      if (valid) {
        console.log('submit!')
        let r = await login(form)
        console.log(r)
      } else {
        console.log('error submit!', fields)
      }
    })
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