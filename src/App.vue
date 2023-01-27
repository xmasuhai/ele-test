<script lang="ts" name="App" setup>
import {ElConfigProvider} from 'element-plus'
import {ref} from "vue"

const zIndex = ref(3000)
const size = 'small'
</script>

<template>
  <ElConfigProvider :size="size" :z-index="zIndex">
    <router-link to="/">Home</router-link>
    |
    <router-link to="/about">About</router-link>
    <!-- 路由占位符 -->
    <router-view/>
  </ElConfigProvider>
</template>

<style lang="scss" scoped>

</style>
