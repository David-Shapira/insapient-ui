const getters = {
	getMembers: state => { return state.members },
	getMember: state => { return state.member },

	getSongs: state => { return state.songs },
	getSong: state => { return state.song },

	getVideos: state => { return state.videos },
	getVideo: state => { return state.video },
	
	getEditMode: state => { return state.editMode }
}

export default getters