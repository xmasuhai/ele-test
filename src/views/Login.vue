<script lang="ts" name="Login" setup>
import {Ref, ref} from 'vue'
import avatarRound from '@/assets/images/avatar/img_avatar_male_round.png'
import HeaderMainFooter from "@/components/layout/HeaderMainFooter"

const avatarRoundImgSrc: Ref<string> = ref(avatarRound)
</script>

<template>
  <div class="login-container">
    <HeaderMainFooter>
      <div class="login-box">
        <!-- 头像区域 -->
        <div class="avatar-box">
          <img :src="avatarRoundImgSrc" alt="">
        </div>

        <!-- 登录表单区域 -->
        <el-form class="login-form">
          <!-- 用户名 -->
          <el-form-item class="form-input">
            <el-input/>
          </el-form-item>
          <!-- 密码 -->
          <el-form-item class="form-input">
            <el-input/>
          </el-form-item>
          <!-- 按钮 -->
          <el-form-item class="btns">
            <el-button type="primary">登录</el-button>
            <el-button type="info">重置</el-button>
          </el-form-item>
        </el-form>

      </div>
    </HeaderMainFooter>
  </div>
</template>

<style lang="scss" scoped>
.login-container {
  display: flex;
  flex-direction: column;
  place-items: center;
  background-color: #2b4b6b;
  height: 100vh;
  flex: 1 1 auto;

  :deep(.login-box) {
    width: 450px;
    height: 300px;
    background-color: #fff;
    border-radius: 10px;
    position: relative;

    // 头像区域
    .avatar-box {
      width: 125px;
      height: 125px;
      border-radius: 50%;
      padding: 10px;
      box-shadow: 0 0 10px #ddd;
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #fff;

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #eee;
      }
    }

    // 登录表单区域
    .login-form {
      position: absolute;
      bottom: 0;
      width: 100%;
      padding: 0 4em 1em;

      // 表单-用户名
      // 表单-密码
      .form-input {
        padding-bottom: 1em;
      }

      // 表单-按钮
      .btns {
        .el-form-item__content {
          display: flex;
          justify-content: flex-end;
        }
      }
    }

  }
}
</style>
