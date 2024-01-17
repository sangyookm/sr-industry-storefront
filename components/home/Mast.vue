<template>
  <div class="mast">
    <div class="mast-inner">
      <div class="mast-image-wrapper">
        <img class="mc-main mc-dark" src="/public/mc_f1_1800_dark.png" alt="Mont Cervin Dark">
        <div class="mc-main mc-light" alt="Mont Cervin Light" :style="{opacity: opacity}"></div>
      </div>
    </div>
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
  position: relative;
  height: calc(100svh - var(--navbar-height));
  // background-color: #FFF ;
  background-color: black;
  padding: 20px;
}

.mast-inner {
  width: 80%;
  height: 100%;
  margin: auto;
  position: sticky;
  top: 50%;
  left: 10%;
  // height: calc(200svh - var(--navbar-height));
  // background-image: url('/cervin-mast.jpg');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
}

.mast-image-wrapper {
  display: block;
  width: 100%;
  height: auto;
  margin: auto;
  position: relative;
  img.mc-dark {
    display: block;
    width: 100%;
    height: auto;
  }
  .mc-light {
    width: 100%;
    height: 100%;
    background-image: url('/public/mc_f1_1800_light.png');
    background-size: contain;
    background-repeat: no-repeat;
    z-index: 2;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: block;
    width: 100%;
    // height: auto;
    animation: 2s fadeIn ease-in-out;
    opacity: 0;
    mask-image: radial-gradient(circle, black, transparent);
    // mask-image: linear-gradient(to bottom, black, transparent);
    mask-size: 100% 100%;
    mask-position: 50% 50%;
    mask-repeat: no-repeat;
    animation-name: lightMovement;
    animation-timing-function: linear;
    animation-duration: 3s;
    animation-fill-mode: forwards;
  }
}

@keyframes lightMovement {
  0% {
    mask-size: 100% 100%;
    opacity: 0;
    mask-size: 100% 100%;

  }
  50% {
    // mask-size: 100% 100%;
    opacity: 0;

  }
  100% {
    opacity: 1;
    // mask-size: 125% 125%;
    // mask-position: 50% 15%;
    mask-position: 50% 0%;
    mask-size: 200% 200%;

  }
}
</style>