<script lang="ts" name="HeaderMainFooter" setup>

</script>

<template>
  <header class="header">
    <slot name="header">header</slot>
  </header>
  <main class="main">
    <slot>main</slot>
  </main>
  <footer class="footer">
    <slot name="footer">footer</slot>
  </footer>
</template>

<style lang="scss" scoped>
%place-center {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 auto;
}

header.header {
  height: 10vh;
  width: 100vw;
  @extend %place-center;
}

main.main {
  height: 80vh;
  width: 80vw;
  max-width: 1280px;
  @extend %place-center;
}

footer.footer {
  height: 10vh;
  width: 100vw;
  @extend %place-center;
}
</style>