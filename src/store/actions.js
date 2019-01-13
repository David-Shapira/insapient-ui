import Api from "./Api";

const actions = {
  LOAD_MEMBERS: async ({ commit }) => {
    try {
      const response = await Api().get("members");
      commit("SET_MEMBERS", { list: response.data.data });
    } catch (error) {
      console.log(error);
    }
  },
  LOAD_SONGS: async ({ commit }) => {
    try {
      const response = await Api().get("songs");
      commit("SET_SONGS", { list: response.data.data });
    } catch (error) {
      console.log(error);
    }
  },
  LOAD_VIDEOS: async ({ commit }) => {
    try {
      const response = await Api().get("videos");
      commit("SET_VIDEOS", { list: response.data.data });
    } catch (error) {
      console.log(error);
    }
  },
  LOAD_GIGS: async ({ commit }) => {
    try {
      const response = await Api().get("gigs");
      commit("SET_GIGS", { list: response.data.data });
    } catch (error) {
      console.log(error);
    }
  }
};
export default actions;
