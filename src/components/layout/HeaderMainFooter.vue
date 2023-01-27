<script setup lang="ts" name="HeaderMainFooter">

</script>

<template>
  <header class="header">
    <slot>header</slot>
  </header>
  <main class="main">
    <slot>main</slot>
  </main>
  <footer class="footer">
    <slot>footer</slot>
  </footer>
</template>

<style lang="scss" scoped>

</style>