<template>
		<div class="container">
			<h1>Manage Songs</h1>
			<div class="row">
				<form @submit.prevent="handleSubmit" class="col s12">
					<div class="input-field">
						<input type="text" id="songName" class="validate" v-model="song.name">
						<label for="songName">Song Name</label>
					</div>
					<div class="input-field">
						<input type="text" id="scUrl" class="validate" v-model="song.url">
						<label for="scUrl">SoundCloud URL</label>
					</div>
					<button class="btn waves-effect waves-light" type="submit" name="action">save
						<i class="material-icons right">send</i>
					</button>
				</form>
			</div>
		</div>
</template>

<script>
export default {
	data () {
		return {
			song: {
				name: '',
				url: ''
			}		
		}
	},
	methods: {
		async handleSubmit () {
			if (this.$store.getters.getEditMode === true) {
				await this.$store.dispatch('UPDATE_SONG', {
					id: this.$route.params.id,
					name: this.song.name,
					url: this.song.url
				})
			}
			else {
				await this.$store.dispatch('ADD_SONG', {
					name: this.song.name,
					url: this.song.url
				})
			}
			this.$router.push({ name: 'admin' })
		}
	},
	async mounted () {
		if (this.$store.getters.getEditMode === true) {
			await this.$store.dispatch('LOAD_SONG', this.$route.params.id)
			let storedSong = this.$store.getters.getSong
			this.song.name = storedSong.name
			this.song.url = storedSong.url
		}
	},
	destroyed () {
			if (this.$store.getters.getEditMode === true) {
				this.$store.commit('TOGGLE_EDIT_MODE')
			}
	}
}
</script>

