<template>
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
</template>

<style lang="scss" scoped>

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