<script setup lang="ts" name="About">
import {useUserStore} from "@/store/modules/userStore"
import {useRouter, useRoute,} from 'vue-router'

// 实例化使用userStore
const users = useUserStore();

// 存储数据
users.SET_USERNAME("user is in About");

// 使用路由
const router = useRouter()
const route = useRoute()
const pushWithQuery = () => {
  console.log('route', route.path, route.query)
  router.push({
    name: 'search',
    query: {
      ...route.query,
    },
    path: '/',
  })
}

</script>

<template>
  About!!! {{ users.username }}
  <br/>
  <button @click="pushWithQuery">Home</button>
</template>

<style lang="scss" scoped>

</style>