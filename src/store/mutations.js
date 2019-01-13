const mutations = {
  SET_MEMBERS: (state, { list }) => {
    state.members = list;
  },
  SET_MEMBER: (state, { list }) => {
    state.member = list;
  },

  SET_SONGS: (state, { list }) => {
    state.songs = list;
  },
  SET_SONG: (state, { list }) => {
    state.song = list;
  },

  SET_VIDEOS: (state, { list }) => {
    state.videos = list;
  },
  SET_VIDEO: (state, { list }) => {
    state.video = list;
  }
};

export default mutations;
