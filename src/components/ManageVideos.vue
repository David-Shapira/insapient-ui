<template>
  <div class="container">
    <h1>Manage Videos</h1>
    <div class="row">
      <form @submit.prevent="handleSubmit" class="col s12">
        <div class="input-field">
          <input type="text" id="videoName" class="validate" v-model="video.name">
          <label for="videoName">Video Name</label>
        </div>
        <div class="input-field">
          <input type="text" id="ytUrl" class="validate" v-model="video.url">
          <label for="ytUrl">YouTube URL</label>
        </div>
        <button class="btn waves-effect waves-light" type="submit" name="action">
          save
          <i class="material-icons right">send</i>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      video: {
        name: "",
        url: ""
      }
    };
  },
  methods: {
    async handleSubmit() {
      if (this.$store.getters.getEditMode === true) {
        await this.$store.dispatch("UPDATE_VIDEO", {
          id: this.$route.params.id,
          name: this.video.name,
          url: this.video.url
        });
      } else {
        await this.$store.dispatch("ADD_VIDEO", {
          name: this.video.name,
          url: this.video.url
        });
      }
      this.$router.push({ name: "admin" });
    }
  },
  async mounted() {
    if (this.$store.getters.getEditMode === true) {
      await this.$store.dispatch("LOAD_VIDEO", this.$route.params.id);
      let storedVideo = this.$store.getters.getVideo;
      this.video.name = storedVideo.name;
      this.video.url = storedVideo.url;
    }
  },
  destroyed() {
    if (this.$store.getters.getEditMode === true) {
      this.$store.commit("TOGGLE_EDIT_MODE");
    }
  }
};
</script>

