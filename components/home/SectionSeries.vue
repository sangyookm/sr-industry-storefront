<template>
  <section class="section-series">
    <div class="grid-series">
      <div class="grid-item grid-item-large grid-item-cervin-series">
        <!-- <img class="mc-dark" src="/public/mc-vertical-dark.png" alt="Mont Cervin Dark"> -->
        <div class="item-meta">
          <h3 class="meta-title">
            Mont Cervin Series
          </h3>
          <div class="meta-description">
            <p>Tenting Ergo_Iconic Deskpiece and Ultimate Typing Experience</p>
          </div>

        </div>
      </div>
      <div class="grid-item grid-item-small grid-item-brick-series">
        <div class="item-meta">
          <h3 class="meta-title">
            Brick Series
          </h3>
          <div class="meta-description">
            <p>Stainless Steel Based_Heavy Weight Design for Stable Typing Experience</p>
          </div>
        </div>
      </div>
      <div class="grid-item grid-item-small grid-item-tomak-series">
        <div class="item-meta">
          <h3 class="meta-title">
            Tomak Series
          </h3>
          <div class="meta-description">
            <p>Split Tenting Tenkeyless_From Beginners to Masters, Gasked mount for a Comfortable Typing Experience</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>

.section-series {
  // height: 40px;
  // padding: 120px 20px;
  margin: 0 auto;
  padding: 80px 10px;
}

.grid-series {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: 1380px;
  padding: 0 40px;
  grid-gap: 20px;
  margin: 0 auto;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-gap: 40px;
  }
}

.grid-item {
  flex: none;

}

.grid-item-large {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: black;
  grid-row: span 2;
  grid-column: span 1;
  padding: 20px;
  height: 100%;
  background-image: url('/public/mc-vertical-dark.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: auto 90%;
  @media screen and (max-width: 1024px) {
    aspect-ratio: 4/6;
  }
  // img {
    
  //   margin: auto;
  //   height: 100%;
  // }
}

.grid-item-small {
  position: relative;
  width: 100%;
  aspect-ratio: 4/3;
  grid-row: span 1;
  grid-column: span 1;
  background-color: #EFEFEF;
}   

.grid-item-brick-series {
  background-image: url('/public/brick65-closeup-badge.jpg');
  background-position: center;
  background-size: cover;
}
.grid-item-tomak-series {
  background-image: url('/public/brick65-metal.jpg');
  background-position: center;
  background-size: cover;
}

.item-meta {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 40px;
  background-image: linear-gradient(0deg,  
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0)
  );
}

h3.meta-title {
  font-size: 64px;
  font-family: Audiowide;
  margin: 0;
  color: white;
}

.meta-description {
  color: white;
  margin: 20px 0 0;
  font-size: 18px;

  p {
    margin: 0;
  }
}



</style>