const mutations = {
  SET_MEMBERS: (state, { list }) => {
    state.members = list;
  },
  SET_SONGS: (state, { list }) => {
    state.songs = list;
  },
  SET_VIDEOS: (state, { list }) => {
    state.videos = list;
  },
  SET_GIGS: (state, { list }) => {
    state.gigs = list;
  }
};

export default mutations;
