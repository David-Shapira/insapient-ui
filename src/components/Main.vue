<template>
  <div class="main">
    <Navbar/>
    <div class="background"></div>
    <Home/>
    <Band/>
    <Songs/>
    <Videos/>
    <Gigs/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import Home from "./Home.vue";
import Band from "./Band.vue";
import Songs from "./Songs.vue";
import Videos from "./Videos.vue";
import Gigs from "./Gigs.vue";
import Footer from "./Footer.vue";

export default {
  name: "main",
  components: {
    Navbar,
    Home,
    Band,
    Songs,
    Videos,
    Gigs,
    Footer
  }
};
</script>

<style>
.main {
  font-family: "Cinzel", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.background {
  opacity: 0;
  background-image: url("http://res.cloudinary.com/dqvimfd8b/image/upload/v1526915596/insapient/home/teeth.jpg");
  background-repeat: repeat;
  -webkit-animation: subliminalImage 20s ease infinite;
  -moz-animation: subliminalImage 20s ease infinite;
  animation: subliminalImage 20s ease infinite;
  position: fixed;
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
}

@-webkit-keyframes subliminalImage {
  69.99999% {
    opacity: 0;
  }
  70% {
    opacity: 1;
  }
  99.11111% {
    opacity: 0;
  }
}
@-moz-keyframes subliminalImage {
  69.99999% {
    opacity: 0;
  }
  70% {
    opacity: 1;
  }
  99.11111% {
    opacity: 0;
  }
}
@keyframes subliminalImage {
  69.99999% {
    opacity: 0;
  }
  70% {
    opacity: 1;
  }
  99.11111% {
    opacity: 0;
  }
}

h3 {
  text-align: center;
}

.container {
  padding-top: 1vh;
}

.container .row {
  text-align: center;
}

body {
  -webkit-animation: backGroundAnimation 40s ease infinite;
  -moz-animation: backGroundAnimation 40s ease infinite;
  animation: backGroundAnimation 40s ease infinite;
}

@-webkit-keyframes backGroundAnimation {
  0% {
    background-color: #212121;
  }
  10% {
    background-color: #424242;
  }
  20% {
    background-color: #616161;
  }
  30% {
    background-color: #757575;
  }
  40% {
    background-color: #9e9e9e;
  }
  50% {
    background-color: #9e9e9e;
  }
  60% {
    background-color: #757575;
  }
  70% {
    background-color: #616161;
  }
  80% {
    background-color: #424242;
  }
  100% {
    background-color: #212121;
  }
}

@-moz-keyframes backGroundAnimation {
  0% {
    background-color: #212121;
  }
  10% {
    background-color: #424242;
  }
  20% {
    background-color: #616161;
  }
  30% {
    background-color: #757575;
  }
  40% {
    background-color: #9e9e9e;
  }
  50% {
    background-color: #9e9e9e;
  }
  60% {
    background-color: #757575;
  }
  70% {
    background-color: #616161;
  }
  80% {
    background-color: #424242;
  }
  100% {
    background-color: #212121;
  }
}

@keyframes backGroundAnimation {
  0% {
    background-color: #212121;
  }
  10% {
    background-color: #424242;
  }
  20% {
    background-color: #616161;
  }
  30% {
    background-color: #757575;
  }
  40% {
    background-color: #9e9e9e;
  }
  50% {
    background-color: #9e9e9e;
  }
  60% {
    background-color: #757575;
  }
  70% {
    background-color: #616161;
  }
  80% {
    background-color: #424242;
  }
  100% {
    background-color: #212121;
  }
}
</style>
