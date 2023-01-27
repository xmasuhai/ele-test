<script lang="ts" name="HeaderMainFooter" setup>

</script>

<template>
  <el-header class="header">
    <slot name="header">header</slot>
  </el-header>
  <el-main class="main">
    <slot>main</slot>
  </el-main>
  <el-footer class="footer">
    <slot name="footer">footer</slot>
  </el-footer>
</template>

<style lang="scss" scoped>
%place-center {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 auto;
}

.header {
  height: 10vh;
  width: 100vw;
  @extend %place-center;
}

.main {
  height: 80vh;
  width: 80vw;
  max-width: 1280px;
  @extend %place-center;
}

.footer {
  height: 10vh;
  width: 100vw;
  @extend %place-center;
}
</style>