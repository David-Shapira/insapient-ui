<template>
	<div class="songs">
		<section id="songs-section" ref="songsRef">
			<h3 class="grey darken-4 grey-text text-lighten-4 z-depth-4">Songs</h3>
			<div class="container">
				<div class="row">
					<div v-for="song in songs" :key="song.url" class="col s12 m4">
						<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" :src="song.url"></iframe>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import M from 'materialize-css/dist/js/materialize.js'

export default {
	name: 'Songs',
	data () {
		return {
			scrollSpyInstance: null
		}
	},
	mounted () {
		this.$store.dispatch('LOAD_SONGS')
		this.scrollSpyInstance = M.ScrollSpy.init(this.$refs.songsRef, {})	
	},
	computed: {
		songs () {
			return this.$store.getters.getSongs
		}
	}
}
</script>

<style scoped>

</style>
