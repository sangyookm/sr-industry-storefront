<template>
  <div class="navbar">
    <div class="navbar-container">
      <div class="navbar-left">
        <div class="navbar-logo">
          <LogoBadgeSolid />
        </div>
      </div>
      <div class="navbar-center">
        <nav class="navbar-menu">
          <ul class="navbar-menu-list">
            <li class="navbar-menu-item">STORE</li>
            <li class="navbar-menu-item">PROJECTS</li>
            <li class="navbar-menu-item">ABOUT</li>
            <li class="navbar-menu-item">CONTACT</li>
          </ul>
        </nav>
      </div>
      <div class="navbar-right">
        <nav class="navbar-menu">
          <ul class="navbar-menu-list">
            <li class="navbar-menu-item">LOGIN</li>
            <li class="navbar-menu-item">CART</li>
          </ul>
        </nav>
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
  height: var(--navbar-height);
  border-bottom: 1px solid black;
  padding: 0 20px;
  background-color: black;
}

.navbar-logo {
  height: 50px;
  svg {
    display: block;
    height: 100%;
    fill: #EFEFEF;
  }
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 16px;
}

nav.navbar-menu {
  display: inline-flex;
  font-family: Saira;
  color: #EFEFEF
}

ul.navbar-menu-list {
  display: inline-flex;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
  gap: 16px;
}

li.navbar-menu-item {
  font-weight: 600;
}

.navbar-left,
.navbar-right {
  display: flex;
  align-items: center;
  flex: 0.5;
}
.navbar-right {
  justify-content: flex-end;
}

.navbar-center {
  flex: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>