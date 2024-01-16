<template>
  <div class="page">
    <div class="mast">
      <div class="mast-inner">
        <div class="mast-image-wrapper">
          <img class="mc-main mc-dark" src="/public/mc_f1_1800_dark.png" alt="Mont Cervin Dark">
          <img class="mc-main mc-light" src="/public/mc_f1_1800_light.png" alt="Mont Cervin Light" :style="{opacity: opacity}">
        </div>
      </div>
      <!-- <h1 class="mast-title">
        Pefectly Machined for,
        Optimal Acoustics
      </h1> -->
    </div>
    <div class="mast-under-strip">
      <div class="inner">
        <h1 class="strip-title">        
          Perfectly Machined for<br/> Optimal Acoustics.<br/>
        </h1>
        <p>
          At SR Industry, we aim to develop keyboards that
          are acoustically sound, through meticulous engineering and
          precise to the dot machining.
          Our goal is to deliver the best typing experience, from your fingertips to your ears.
        </p> 
      </div>
    </div>

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
  img.mc-light {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: auto;
    animation: 2s fadeIn ease-in-out;
    opacity: 1;
  }
}

h1.mast-title {
  // position: absolute;
  // margin: 0;
  // top: 50%;
  // left: 50%;
  // transform: translate3d(-50%, -50%, 0);
  text-align: center;
  width: 100%;
  bottom: 0;
  color: white;
  font-family: Audiowide;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}


.mast-under-strip {
  // height: 40px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  padding: 120px 20px;
  margin: 0 auto;
  background-color: black;
  p {
    font-size: 27px;
    margin: 1em 0 0;
    color: white;
    max-width: 1200px;
    line-height: 1.3;
  }
  .inner {
    // max-width: 1200px;
    // max-width: 1400px;
    margin: auto;
  }
}

h1.strip-title {
  font-size: 48px;
  text-align: left;
  color: white;
  font-family: Audiowide;
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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 20px;
  gap: 20px;
  background-color: black;

  @media screen and (max-width: 780px) {
    // flex-direction: column;
  }
  @media screen and (max-width: 640px) {
    // flex-direction: column;
  }
}

.section-general-item {
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
  background-color: #EEE;
  display: flex;
  // align-items: flex-end;
  flex-direction: column;
  // padding: 40px;
  @media screen and (max-width: 780px) {
    // width: 100%;
    // aspect-ratio: 4/3;
  }
  @media screen and (max-width: 640px) {
    width: 100%;
    aspect-ratio: 4/3;
  }
  img {
    // top: 0;
    // left: 0;
    // position: absolute;
    // width: 100%;
    // height: 100%;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
  }
}

.item-meta {
  position: relative;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;;

  gap: 8px;
  bottom: 0;
  left: 0;
  right: 0;
  // display: none;
  z-index: 3;
  padding: 20px;
  // background-color: black;
  width: 100%;
  @media screen and (max-width: 780px) {
    padding: 20px;
    
  }
  @media screen and (max-width: 640px) {
    // display: grid;
    // grid-template-columns: 200px 1fr;
    // gap: 16px;
  }
}

.item-meta .product-name {
  display: block;
  font-size: 24px;
  font-family: Saira;
  margin: 0;
  font-weight: 500;
  padding: 15px;
  background-color: black;
  color: white;
  width: auto;
  font-family: Audiowide;
  flex: none;
  // @media screen and (max-width: 1080px) {
  //   font-size: 32px;
  // }
  // @media screen and (max-width: 780px) {
  //   font-size: 21px;
  // }
  // @media screen and (max-width: 640px) {
  //   font-size: 24px;
  // }
}

.item-meta .product-spec {
  color: white;
  font-size: 16px;
  line-height: 1.3;
  background-color: black;
  // height: 32px * 1.3;
  display: block;
  width: auto;
  flex: none;
  padding: 5px;
  // @media screen and (max-width: 1080px) {
  //   font-size: 14px;
  //   height: 28px * 1.3;
  // }
  // @media screen and (max-width: 780px) {
  //   margin: 0;
  //   font-size: 13px;
  //   height: 26px * 1.3;
  //   // height: auto;
  // }
  // @media screen and (max-width: 640px) {
  //   font-size: 14px;
  //   height: 28px * 1.3;
  // }
}

</style>