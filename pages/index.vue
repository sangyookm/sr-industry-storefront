<template>
  <div class="page">
    <div class="mast">
      <div class="mast-bg" :style="{opacity: opacity}"></div>
    </div>
    <!-- <div class="mast-under-strip"></div> -->

    <section class="section-general">
      <!-- <div class="section-general-head">
        <h2 class="section-general-title">SR INDUSTRY</h2>
      </div> -->
      <div class="section-general-body">
        <div class="section-general-item">
          <img src="/brick65-closeup-badge.jpg" />
          <div class="item-meta">
            <h4 class="product-name">
              BRICK65
            </h4>
            <div class="product-spec">
              65% _ Stainless steel base plate & Aluminum6061 Upper plate
            </div>

          </div>
        </div>
        <div class="section-general-item">
          <img src="/montcervin-closeup-silver.jpg" />
          <div class="item-meta">
            <h4 class="product-name">
              Mont Cervin
            </h4>
            <div class="product-spec">
              Tenting Ergo _ Full Aluminum & Stainless Steel
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>

const scrollY = ref(0)
const innerHeight = ref(0)

const handleScroll = ()=> {
  // console.log(window.scrollY, window.innerHeight)
  scrollY.value = window.scrollY
}

const opacity = computed(()=> {
  const mod = 4
  if (scrollY.value >= innerHeight.value/mod) {
    return Math.max(1 - (scrollY.value - innerHeight.value/mod)/(innerHeight.value/mod * 2 - innerHeight.value/mod), 0)
  }
  return 1
})

watch(opacity, (n)=> {
  console.log('opacity', n)
})

const handleResize = ()=> {
  innerHeight.value = window.innerHeight
}

onMounted(()=> {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('resize', handleResize)
  innerHeight.value = window.innerHeight
})


</script>

<style lang="scss" scoped>

.mast {
  height: calc(100svh - var(--navbar-height));
  background-color: #040404;
  padding: 20px;
}

.mast-bg {
  width: 80%;
  height: 100%;
  margin: auto;
  background-image: url('/cervin-mast.jpg');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

.mast-under-strip {
  height: 40px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
}

.section-general {
  // height: ;
}

.section-general-head {
  height: 60px;
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
  padding: 0 20px;
}

h2.section-general-title {
  font-size: 18px;
  margin: 0;
}

.section-general-body {
  display: flex;
}

.section-general-item {
  position: relative;
  width: 50%;
  aspect-ratio: 1/1;
  background-color: #EEE;
  display: flex;
  // align-items: flex-end;
  flex-direction: column;
  // padding: 40px;
  img {
    // top: 0;
    // left: 0;
    // position: absolute;
    // width: 100%;
    // height: 100%;
    flex: 1;
    object-fit: cover;
    z-index: 1;
  }
}

.item-meta {
  position: relative;
  z-index: 3;
  padding: 40px;
  background-color: black;
  width: 100%;
}

.item-meta .product-name {
  font-size: 32px;
  font-family: Saira;
  margin: 0;
  font-weight: 500;
  // padding: 10px;
  // background-color: black;
  color: white;
}

.item-meta .product-spec {
  color: white;
  font-size: 16px;
  line-height: 1.3;
  height: 32px * 1.3;
}

</style>