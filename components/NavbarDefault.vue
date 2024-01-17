<template>
  <div class="navbar">
    <div class="navbar-container">
      <div class="navbar-logo-wrap">
        <NuxtLink
          class="navbar-logo"
          :to="{
            name: 'index'
          }"
        >
          <LogoBadgeSolid />
        </NuxtLink>
      </div>
      <div class="navbar-menu-wrap">
        <nav class="navbar-menu navbar-menu-large">
          <ul class="navbar-menu-list">
            <li class="navbar-menu-item">
              <NuxtLink :to="{
                name: 'store'
              }">
                STORE
              </NuxtLink>
            </li>
            <li class="navbar-menu-item">PROJECTS</li>
            <li class="navbar-menu-item">ABOUT</li>
            <li class="navbar-menu-item">CONTACT</li>
          </ul>
        </nav>
      </div>
      <div class="navbar-user-wrap">
        <nav class="navbar-menu navbar-menu-large">
          <ul class="navbar-menu-list">
            <li class="navbar-menu-item">
              <NuxtLink
                :to="{
                  name: 'signin'
                }"
              >
                LOGIN
              </NuxtLink>
            </li>
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
  cursor: pointer;
  display: block;
  height: 50px;
  width: auto;
  svg {
    display: block;
    height: 100%;
    fill: #EFEFEF;
  }
  @media screen and (max-width: 940px) {
    height: 40px;
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
  font-family: Audiowide;
  // letter-spacing: 3px;
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

li.navbar-menu-item a {
  // font-weight: 600;
  pointer-events: auto;
  color: white;
  text-decoration: none;
}

.navbar-logo-wrap {
  display: flex;
  align-items: center;
  flex: 0.5;
  @media screen and (max-width: 940px) {
    order: 2;
    flex: auto;
    justify-content: center;
  }
}

.navbar-user-wrap {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 0.5;
  @media screen and (max-width: 940px) {
    order: 3;
    flex: 0.5;
  }
}
.navbar-menu-wrap {
  flex: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 940px) {
    background-color: red;
    order: 1;
    flex: 0.5;
  }
}

nav.navbar-menu-large {
  @media screen and (max-width: 940px) {
    display: none;
  }
}


</style>