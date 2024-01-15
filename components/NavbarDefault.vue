<template>
  <div class="navbar">
    <div class="navbar-container">
      <div class="navbar-logo">
        <LogoBadgeSolid />
      </div>
    </div>
  </div>
</template>

<script setup>
import LogoFullHorizontal from '@/svg/logos/LogoFullHorizontal.vue';
import LogoBadgeSolid from '@/svg/logos/LogoBadgeSolid.vue';


</script>

<style lang="scss" scoped>

.navbar {
  display: flex;
  align-items: center;
  height: 80px;
  border-bottom: 1px solid black;
  padding: 0 20px;
}

.navbar-logo {
  height: 50px;
  svg {
    display: block;
    height: 100%;
  }
}

</style>