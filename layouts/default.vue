<template>
  <div class="layout-main">
    <NavbarDefault />
    <slot />

    <FooterDefault />
  </div>
</template>

<script setup>
import NavbarDefault from '@/components/NavbarDefault.vue'
import FooterDefault from '@/components/FooterDefault.vue'

</script>