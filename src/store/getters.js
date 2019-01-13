const getters = {
  getMembers: state => {
    return state.members;
  },
  getSongs: state => {
    return state.songs;
  },
  getVideos: state => {
    return state.videos;
  },
  getGigs: state => {
    return state.gigs;
  }
};

export default getters;
