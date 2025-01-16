<script setup lang="ts">
import {reactive} from "vue";
import {userLoginService} from "../../api/user.ts";
import useLoginStore from "../../store/useLoginStore.ts";
import {ElMessage} from "element-plus";
import router from "../../router";

// 登录状态
const loginStore = useLoginStore()

// 登录
const loginForm = reactive({
  username: '',
  password: ''
})
const login = async () => {
  const resp = await userLoginService(loginForm)
  loginStore.token = resp.data.data
  ElMessage.success('登录成功')
  router.push('/disk')
}
const reset = () => {
  Object.assign(loginForm, {
    username: '',
    password: ''
  })
}

</script>

<template>
  <div class="login">
    <div class="top">
      <img src="../../assets/logo.svg" alt="">
      <span>亮鹏网盘</span>
    </div>
    <div class="content">
      <div class="title">
        请 登 录
      </div>
      <el-form class="form" label-width="60px">
        <el-form-item label="用户名">
          <el-input placeholder="请输入用户名" v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input placeholder="请输入密码" type="password" v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item label=" ">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button @click="reset">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.login {
  .top {
    background-color: rgba(0, 0, 0, 0.06);
    width: 100%;
    height: 75px;
    display: flex;
    align-items: center;
    padding-left: 60px;
    span {
      color: #409eff;
      font-size: 30px;
      margin-left: 30px;
    }
  }
  .content {
    margin-top: 25vh;
    .title {
      text-align: center;
      color: #409eff;
      font-size: 35px;
    }
    .form {
      width: 500px;
      margin: 25px auto;
    }
  }
}
</style>