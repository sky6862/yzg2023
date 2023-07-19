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
            <el-input v-model="form.account" :prefix-icon="User"/>
          </el-form-item>
    
          <el-form-item label="密码" prop="password" >
            <el-input v-model="form.password" :prefix-icon="Lock" show-password/>
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
  import {reactive,ref} from 'vue'
  import {User,Lock,View,Hide} from '@element-plus/icons-vue'
  import type { FormInstance, FormRules } from 'element-plus'
  import {login} from '../api/account.js';
  import { ElMessage } from 'element-plus'
  import { useRouter } from 'vue-router'
  import {ACC_REG,PWD_REG} from '../utils/reg'

  const router = useRouter()

  let form = reactive({
    account:"",
    password:""
  })

  

  const ruleFormRef = ref<FormInstance>()

  // 验证函数1
  const validateAccount = (rule: any, value: any, callback: any) => {
    if (value === '') {
      callback(new Error('请输入账号'))
    } else {
      if (!ACC_REG.test(value)) {
        callback(new Error('账号格式不正确,3到12位'))
      } else {
        callback()
      }
    }
  }

  // 验证函数2
  const validatePass = (rule: any, value: any, callback: any) => {
    if (value === '') {
      callback(new Error('请输入密码'))
    }else {
      if (!PWD_REG.test(value)) {
        callback(new Error('密码格式不正确,3到12位'))
      } else {
        callback()
      }
    }
  }

  const rules = reactive<FormRules>({
   /*  account: [
      { required: true, message: '请输入账号', trigger: 'blur' },
      { min: 3, max: 5, message: '长度在3-5', trigger: 'blur' },
    ],
    password: [
      { required: true, message: '请输入密码', trigger: 'blur' },
      { min: 3, max: 5, message: '长度在3-5', trigger: 'blur' },
    ], */
    account: [{ validator: validateAccount, trigger: 'blur' }],
    password: [{ validator: validatePass, trigger: 'blur' }],
  })

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
        }else{
          ElMessage({
            message: r.msg,
            type: 'warning',
          })
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
  
  display:flex;
  justify-content:center;
  align-items:center;

  .loginForm{
    // border:1px solid red;
    box-shadow: 0 0 10px 5px #4a4949;
    width:530px;
    height:280px;
    color:#ffffff;
    padding-right: 120px;

    h2{
      text-align:center;
    }

    /deep/.el-input__wrapper{
      background: transparent;
      
    }
    /deep/.el-form-item__label{
      color:#ffffff;
      width: 300px;
    }
    /deep/.el-input__prefix,
    /deep/.el-input__suffix,
    /deep/.el-input__inner{
      color:#ffffff!important;
    }
  }
}
</style>