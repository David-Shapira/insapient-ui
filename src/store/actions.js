import Api from './Api'

const actions = {
	LOAD_MEMBERS: async ({commit}) => {
		try {
			const response = await Api().get('members')
			commit('SET_MEMBERS', {list: response.data.data})
		} catch (error) {
			console.log(error)
		}
	},
	LOAD_MEMBER: async ({commit}, memberId) => {
		try {
			const response = await Api().get(`members/${memberId}`)
			commit('SET_MEMBER', {list: response.data.data})
		} catch (error) {
			console.log(error)
		}
	},
	// eslint-disable-next-line
	ADD_MEMBER: async ({commit}, data) => {
		try {
			await Api().post('members', {
				name: data.name, 
				instrument: data.instrument,
				info: data.info,
				image: data.image 
			})
		} catch (error) {
			console.log(error)
		}
	},
	// eslint-disable-next-line
	UPDATE_MEMBER: async ({commit}, data) => {
		try {
			await Api().put(`members/${data.id}`, {
				name: data.name, 
				instrument: data.instrument,
				info: data.info,
				image: data.image
			})
		} catch (error) {
			console.log(error)
		}
	},
	// eslint-disable-next-line
	DELETE_MEMBER: async ({commit}, memberId) => {
		try {
			await Api().delete(`members/${memberId}`)
		} catch (error) {
			console.log(error)
		}
	},
	LOAD_SONGS: async ({commit}) => {
		try {
			const response = await Api().get('songs')
			commit('SET_SONGS', {list: response.data.data})
		} catch (error) {
			console.log(error)
		}
	},
	LOAD_SONG: async ({commit}, songId) => {
		try {
			const response = await Api().get(`songs/${songId}`)
			commit('SET_SONG', {list: response.data.data})
		} catch (error) {
			console.log(error)
		}
	},
	// eslint-disable-next-line
	ADD_SONG: async ({commit}, data) => {
		try {
			await Api().post('songs', {name: data.name, url: data.url})
		} catch (error) {
			console.log(error)
		}
	},
	// eslint-disable-next-line
	UPDATE_SONG: async ({commit}, data) => {
		try {
			await Api().put(`songs/${data.id}`, {name: data.name, url: data.url})
		} catch (error) {
			console.log(error)
		}
	},
	// eslint-disable-next-line
	DELETE_SONG: async ({commit}, songId) => {
		try {
			await Api().delete(`songs/${songId}`)
		} catch (error) {
			console.log(error)
		}
	},
	LOAD_VIDEOS: async ({commit}) => {
		try {
			const response = await Api().get('videos')
			commit('SET_VIDEOS', {list: response.data.data})
		} catch (error) {
			console.log(error)
		}
	},
	LOAD_VIDEO: async ({commit}, videoId) => {
		try {
			const response = await Api().get(`videos/${videoId}`)
			commit('SET_VIDEO', {list: response.data.data})
		} catch (error) {
			console.log(error)
		}
	},
	// eslint-disable-next-line
	ADD_VIDEO: async ({commit}, data) => {
		try {
			await Api().post('videos', {name: data.name, url: data.url})
		} catch (error) {
			console.log(error)
		}
	},
	// eslint-disable-next-line
	UPDATE_VIDEO: async ({commit}, data) => {
		try {
			await Api().put(`videos/${data.id}`, {name: data.name, url: data.url})
		} catch (error) {
			console.log(error)
		}
	},
	// eslint-disable-next-line
	DELETE_VIDEO: async ({commit}, videoId) => {
		try {
			await Api().delete(`videos/${videoId}`)
		} catch (error) {
			console.log(error)
		}
	}
}
export default actions