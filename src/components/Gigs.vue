<template>
  <div class="media">
    <section id="gigs-section" ref="gigsRef">
      <h3 class="grey darken-4 grey-text text-lighten-4 z-depth-4">Gigs</h3>
      <div class="container">
        <div class="row">
          <div class="col s12 m3" v-for="gig in gigs" :key="gig._id">
            <div class="card">
              <div class="card-image">
                <img :src="gig.image">
                <a
                  class="btn-floating halfway-fab waves-effect waves-light"
                  href="https://www.facebook.com/events/2461889603827503/"
                  target="_blank"
                >
                  <i class="fab fa-facebook-square"></i>
                </a>
              </div>
              <div class="card-content">
                <p>{{gig.date}}</p>
                <p>{{gig.venue}}</p>
                <p>{{gig.address}}</p>
                <p>Doors: {{gig.hour}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import M from "materialize-css/dist/js/materialize.js";

export default {
  name: "gigs",
  data() {
    return {
      scrollSpyInstance: null
    };
  },
  mounted() {
    this.$store.dispatch("LOAD_GIGS");
    this.scrollSpyInstance = M.ScrollSpy.init(this.$refs.gigsRef, {});
  },
  computed: {
    gigs() {
      return this.$store.getters.getGigs;
    }
  }
};
</script>

<style scoped>
.card {
  background-color: #212121;
  color: #fafafa;
}
.btn-floating {
  font-size: 2vh;
  background-color: #3b5998;
}
</style>
