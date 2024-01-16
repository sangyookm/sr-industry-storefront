<template>
  <div class="layout-main">
    <div class="layout-head">
      <NavbarDefault />
    </div>
    <div class="layout-body">
      <slot />
    </div>

    <FooterDefault />
  </div>
</template>

<script setup>
import NavbarDefault from '@/components/NavbarDefault.vue'
import FooterDefault from '@/components/FooterDefault.vue'

const { data } = await useAsyncData('/api/products', {
  method: 'get',
})


</script>

<style lang="scss" scoped>
.layout-main {
  height: 100svh;
  display: flex;
  flex-direction: column;
}

.layout-body {
  flex: 1;
}
</style>