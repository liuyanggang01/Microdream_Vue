<template>
  <div class="body">
    <el-form :model="login_info" ref="login_info" label-position="left" label-width="0px" class="login-container"
             v-loading="loading"
             element-loading-text="登录中">
      <h3 class="title">系统登录</h3>
      <el-form-item prop="account" :rules="[{required: true, message: '用户名不能为空'}]">
        <el-input type="text" v-model="login_info.account" prefix-icon="el-icon-user" auto-complete="off"
                  placeholder="账号" class="username_css">
        </el-input>
      </el-form-item>
      <el-form-item prop="password" :rules="[{required: true, message: '密码不能为空'}]">
        <el-input type="password" v-model="login_info.password" prefix-icon="el-icon-lock" auto-complete="off"
                  placeholder="密码" @keyup.enter.native="submitForm" class="username_css"></el-input>
      </el-form-item>
      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:100%;" @click="submitForm(login_info)" :loading="logining">登录</el-button>
      </el-form-item>
    </el-form>
    <div style="position: absolute;bottom: 30px;width: 100%;text-align: center;">
      <span style="font-size: 18px;color: #FFFFFF;">
        Powered by <el-link type="primary" href="https://www.liuyanggang.com" style="font-size: 18px;color: #FFFFFF;">Microdream</el-link>
        ©2019-2019
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      logining: false,
      login_info: {
        account: '',
        password: ''
      },
      loading: false,
    }
  },
  methods:{
    submitForm(){

    }
  }
}
</script>

<style>
  .body {
    background-color: #0074D9;
    overflow: hidden;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: url('/background.png');
    background-repeat: no-repeat;
    background-position: center;
  }

  .login-container {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    width: 350px;
    margin: 250px calc(50% - 210px);
    padding: 35px 35px 15px 35px;
    background: rgba(255, 255, 255, 0.58);
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }

  .title {
    margin: 0 auto 40px auto;
    text-align: center;
    color: #505458;
  }
  .username_css .el-input__inner{
    color: #606266 !important;
    border: 1px solid #DCDFE6 !important;
  }
</style>
