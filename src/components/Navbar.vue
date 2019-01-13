<template>
  <div class="navbar-comp">
    <div class="navbar-fixed">
      <nav>
        <div class="nav-wrapper grey darken-4">
          <a href="#" data-target="mobile-demo" class="sidenav-trigger">
            <i class="material-icons">menu</i>
          </a>
          <a href="#home-section" class="brand-logo center hide-on-large-only">
            <img
              src="https://res.cloudinary.com/dqvimfd8b/image/upload/v1523784781/insapient/logo.png"
              alt="Insapient Logo"
            >
          </a>
          <div class="row hide-on-med-and-down">
            <div class="col offset-s3 s1">
              <a href="#band-section">Band</a>
            </div>
            <div class="col s1">
              <a href="#songs-section">Songs</a>
            </div>
            <div class="col s1">
              <a href="#home-section" class="brand-logo center">
                <img
                  src="https://res.cloudinary.com/dqvimfd8b/image/upload/v1523784781/insapient/logo.png"
                  alt="Insapient Logo"
                >
              </a>
            </div>
            <div class="col offset-s1 s1">
              <a href="#videos-section">Videos</a>
            </div>
            <div class="col s1">
              <a href="#gigs-section">Gigs</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <ul class="sidenav grey darken-4" id="mobile-demo" ref="mySideNav">
      <li>
        <a href="#home-section" v-on:click="closeSideNav()">Home</a>
      </li>
      <li>
        <a href="#band-section" v-on:click="closeSideNav()">Band</a>
      </li>
      <li>
        <a href="#songs-section" v-on:click="closeSideNav()">Songs</a>
      </li>
      <li>
        <a href="#videos-section" v-on:click="closeSideNav()">Videos</a>
      </li>
      <li>
        <a href="#gigs-section" v-on:click="closeSideNav()">Gigs</a>
      </li>
      <li>
        <div>
          <a href="https://www.instagram.com/insapient.band" target="_blank">
            <i class="fab fa-instagram media-icon"></i>
          </a>
          <a href="https://www.facebook.com/insapient.band" target="_blank">
            <i class="fab fa-facebook-f media-icon"></i>
          </a>
          <a href="https://www.youtube.com/channel/UCnscHLfwxs-6kApOiHZMLMQ" target="_blank">
            <i class="fab fa-youtube media-icon"></i>
          </a>
          <a href="https://soundcloud.com/insapient" target="_blank">
            <i class="fab fa-soundcloud media-icon"></i>
          </a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import M from "materialize-css/dist/js/materialize.js";

export default {
  name: "navbar",
  data() {
    return {
      sideNavInstance: null
    };
  },
  mounted() {
    this.sideNavInstance = M.Sidenav.init(this.$refs.mySideNav, {});
  },
  methods: {
    closeSideNav() {
      if (this.sideNavInstance.isOpen) {
        this.sideNavInstance.close();
      }
    }
  }
};
</script>

<style scoped>
nav {
  color: #f5f5f5;
}

.sidenav li a {
  color: #f5f5f5;
}

.brand-logo img {
  height: 6vh;
  width: 18vh;
  vertical-align: middle;
}

.row .col a {
  font-size: 3vh;
}

.media-icon {
  margin: 10px;
  font-size: 2.5vh;
  color: #fafafa;
  /* vertical-align: middle !important; */
}
</style>
