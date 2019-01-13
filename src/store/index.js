import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
		members: [],
		member: null,
		songs: [],
		song: null,
		videos: [],
		video: null,
		editMode: false
  },
  actions,
  mutations,
  getters
})

export default store