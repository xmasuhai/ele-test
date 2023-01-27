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
        <div class="avatar-box">
          <img :src="avatarRoundImgSrc" alt="">
        </div>
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

  }
}
</style>
