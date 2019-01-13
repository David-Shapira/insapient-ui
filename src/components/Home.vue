<template>
  <div class="home">
    <section id="home-section" ref="homeRef">
      <div class="container">
        <div class="row">
          <div class="col s12">
            <div class="swiper-container" ref="swiperContainer">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <img
                    class="responsive-img"
                    src="https://res.cloudinary.com/dqvimfd8b/image/upload/v1523817143/insapient/home/1.jpg"
                  >
                </div>
                <div class="swiper-slide">
                  <img
                    class="responsive-img"
                    src="https://res.cloudinary.com/dqvimfd8b/image/upload/v1523817313/insapient/home/2.jpg"
                  >
                </div>
                <div class="swiper-slide">
                  <img
                    class="responsive-img"
                    src="https://res.cloudinary.com/dqvimfd8b/image/upload/v1523817143/insapient/home/3.jpg"
                  >
                </div>
                <div class="swiper-slide">
                  <img
                    class="responsive-img"
                    src="https://res.cloudinary.com/dqvimfd8b/image/upload/v1523817313/insapient/home/4.jpg"
                  >
                </div>
                <div class="swiper-slide">
                  <img
                    class="responsive-img"
                    src="https://res.cloudinary.com/dqvimfd8b/image/upload/v1523817143/insapient/home/5.jpg"
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col s12">
            <p class="band-message flow-text">
              We are Insapient - New School Thrash/Groove Metal band from Israel.
              We bring an unforgiving, bone-crushing and moshpit-forming wave of madness.
              Fuck the system. Fuck the government. Fuck the conformity.
              The question is: are You sapient enough to realize that you're Insapient?
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Swiper from "swiper";
import M from "materialize-css/dist/js/materialize.js";

export default {
  name: "Home",
  data() {
    return {
      slider: null,
      scrollSpyInstance: null
    };
  },
  mounted() {
    this.slider = new Swiper(this.$refs.swiperContainer, {
      loop: true,
      autoplay: {
        delay: 4000
      }
    });
    this.scrollSpyInstance = M.ScrollSpy.init(this.$refs.homeRef, {});
  }
};
</script>

<style scoped>
.band-message {
  -webkit-animation: bandMessageAnimation 40s ease infinite;
  -moz-animation: bandMessageAnimation 40s ease infinite;
  animation: bandMessageAnimation 40s ease infinite;
}

@-webkit-keyframes bandMessageAnimation {
  0% {
    color: #9e9e9e;
  }
  30% {
    color: #212121;
  }
  90% {
    color: #9e9e9e;
  }
  100% {
    color: #9e9e9e;
  }
}

@-moz-keyframes bandMessageAnimation {
  0% {
    color: #9e9e9e;
  }
  30% {
    color: #212121;
  }
  90% {
    color: #9e9e9e;
  }
  100% {
    color: #9e9e9e;
  }
}

@keyframes bandMessageAnimation {
  0% {
    color: #9e9e9e;
  }
  30% {
    color: #212121;
  }
  90% {
    color: #9e9e9e;
  }
  100% {
    color: #9e9e9e;
  }
}
</style>
