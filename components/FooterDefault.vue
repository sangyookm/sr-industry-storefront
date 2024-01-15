<template>
  <footer class="footer">
    <div class="footer-brand">
      <div class="footer-logo">
        <LogoFullHorizontalSolid />
      </div>
      <div class="footer-address">
        <div class="address-item">
          Ansan-si, Gyunggi-Do
        </div>
        <div class="address-item">
          Republic of Korea
        </div>
      </div>
      <div class="tag-line">
      </div>
    </div>
    <div class="footer-main">

    </div>
  </footer>
</template>

<script setup>
import LogoFullHorizontalSolid from '@/svg/logos/LogoFullHorizontalSolid.vue'
</script>

<style lang="scss" scoped>

footer.footer {
  display: flex;
  background-color: black;
  padding: 200px 40px 120px;
  color: #777;
}

.footer-logo {
  svg {
    height: 40px;
    fill: #777;
  }
}

.tag-line {
  font-size: 48px;
  max-width: 300px;
}

.footer-main {
  flex: 1;
}

.footer-address {
  margin: 40px 0 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.address-item {

}

</style>
