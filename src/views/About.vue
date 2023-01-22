<script setup lang="ts" name="About">
import {useUserStore} from "@/store/modules/userStore"

// 实例化使用userStore
const users = useUserStore();

// 存储数据
users.SET_USERNAME("user is in About");

</script>

<template>
  About!!! {{ users.username }}
</template>

<style lang="scss" scoped>

</style>