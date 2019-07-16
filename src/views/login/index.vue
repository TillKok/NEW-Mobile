<template>
  <div class="login-wrap">
    <van-nav-bar title="首页"/>
    <!-- 表单 -->
    <form>
      <van-cell-group>
          <van-field
              v-model="user.mobile"
              required
              clearable
              label="手机号"
              placeholder="请输入手机号"
          />
          <van-field
              v-model="user.code"
              label="验证码"
              placeholder="请输入验证码"
              required
              clearable
          />
      </van-cell-group>

      <div class="login-btn-box">
        <van-button class="login-btn" type="info" @click.prevent="handleLogin">登录</van-button>
      </div>
    </form>
  </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  name: 'LoginIndex',
  data () {
    return {
      user: {
        mobile: '',
        code: ''
      }
    }
  },
  methods: {
    handleLogin () {
      try {
        const res = login(this.user)
        console.log(res)
      } catch (err) {
        console.log(err)
        console.log('登录失败')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.login-btn-box {
    padding: 20px;
    .login-btn {
      width: 100%;
    }
}
</style>
