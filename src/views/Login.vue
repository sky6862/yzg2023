<template>
  <div class="login">
    <div class="loginForm">
        <h2>登录</h2>
        <el-form 
          :model="form" 
          :rules="rules"
          label-width="120px"  
          ref="ruleFormRef"
        >
          <el-form-item label="账号" prop="account">
            <el-input v-model="form.account"  :suffix-icon="Search"/>
          </el-form-item>
    
          <el-form-item label="密码" prop="password">
            <el-input v-model="form.password" />
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
            <el-button @click="resetForm(ruleFormRef)">重置</el-button>
          </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
  import {reactive,ref,toRefs} from 'vue'
  import {Search} from '@element-plus/icons-vue'
  import type { FormInstance, FormRules } from 'element-plus'
  import {login} from '../api/account';
  import { ElMessage } from 'element-plus'
  import { useRouter } from 'vue-router'

  const router = useRouter()

  let form = reactive({
    account:"",
    password:""
  })

  const rules = reactive<FormRules>({
    account: [
      { required: true, message: '请输入账号', trigger: 'blur' },
      { min: 3, max: 5, message: '长度在3-5', trigger: 'blur' },
    ],
    password: [
      { required: true, message: '请输入密码', trigger: 'blur' },
      { min: 3, max: 5, message: '长度在3-5', trigger: 'blur' },
    ],
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
        if(r.code == 0){
          localStorage.setItem("token",r.token)
          localStorage.setItem("role",r.role)
          ElMessage({
            message: r.msg,
            type: 'success',
          })
          router.push({name:"Home"})
        }
      } else {
        console.log('error submit!', fields)
      }
    })
  }

  const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
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