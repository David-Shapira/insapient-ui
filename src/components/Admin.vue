<template>
	<div class="container">
		<h1 class="center-align">InsAdmin</h1>
		<ul class="collapsible popout" ref="collapsible">

			<li>
				<div class="collapsible-header">Members</div>
				<div class="collapsible-body">
					<div class="new-button-container center-align">
						<router-link class="btn-floating pink darken-4 center-align" to="/manageMembers/new">
							<i class="material-icons">add</i>
						</router-link>
					</div>
					<ul class="collection secion">
						<li class="collection-item avatar" v-for="member in members" :key="member._id">
							<i class="material-icons circle">person</i>
							<span class="title">{{member.name}}</span>
							<div class="secondary-content">
								<router-link 
									class = "waves-effect waves-teal btn-flat"
									:to="'manageMembers/' + member._id" 
									@click.native="toggleEditMode"
								>
									<i class="material-icons">edit</i>
								</router-link>
								<button 
									class="waves-effect waves-teal btn-flat"
									@click="deleteMember(member._id)" 
								>
									<i class="material-icons">delete</i>
								</button>
							</div>
						</li>
					</ul>
				</div>
			</li>

			<li>
				<div class="collapsible-header">Songs</div>
				<div class="collapsible-body">
					<div class="new-button-container center-align">
						<router-link class="btn-floating pink darken-4 center-align" to="/manageSongs/new">
							<i class="material-icons">add</i>
						</router-link>
					</div>
					<ul class="collection secion">
						<li class="collection-item avatar" v-for="song in songs" :key="song._id">
							<i class="material-icons circle">music_note</i>
							<span class="title">{{song.name}}</span>
							<div class="secondary-content">
								<router-link 
									class = "waves-effect waves-teal btn-flat"
									:to="'manageSongs/' + song._id" 
									@click.native="toggleEditMode"
								>
									<i class="material-icons">edit</i>
								</router-link>
								<button 
									class="waves-effect waves-teal btn-flat"
									@click="deleteSong(song._id)" 
								>
									<i class="material-icons">delete</i>
								</button>
							</div>
						</li>
					</ul>
				</div>
			</li>

			<li>
				<div class="collapsible-header">Videos</div>
				<div class="collapsible-body">
					<div class="new-button-container center-align">
						<router-link class="btn-floating pink darken-4 center-align" to="/manageVideos/new">
							<i class="material-icons">add</i>
						</router-link>
					</div>
					<ul class="collection secion">
						<li class="collection-item avatar" v-for="video in videos" :key="video._id">
							<i class="material-icons circle">videocam</i>
							<span class="title">{{video.name}}</span>
							<div class="secondary-content">
								<router-link 
									class = "waves-effect waves-teal btn-flat"
									:to="'manageVideos/' + video._id" 
									@click.native="toggleEditMode"
								>
									<i class="material-icons">edit</i>
								</router-link>
								<button 
									class="waves-effect waves-teal btn-flat"
									@click="deleteVideo(video._id)" 
								>
									<i class="material-icons">delete</i>
								</button>
							</div>
						</li>
					</ul>
				</div>
			</li>
			
		</ul>
	</div>
</template>

<script>
import M from 'materialize-css/dist/js/materialize.js'
export default {
	data () {
		return {
			collapsibleInstance: null
		}
	},
	methods: {
		toggleEditMode () {
			this.$store.commit('TOGGLE_EDIT_MODE')
		},
		async deleteSong (id) {
			await this.$store.dispatch('DELETE_SONG', id)
			await this.$store.dispatch('LOAD_SONGS')
		},
		async deleteVideo (id) {
			await this.$store.dispatch('DELETE_VIDEO', id)
			await this.$store.dispatch('LOAD_VIDEOS')
		},
		async deleteMember (id) {
			await this.$store.dispatch('DELETE_MEMBER', id)
			await this.$store.dispatch('LOAD_MEMBERS')
		}
		// async deleteGig (id) {
		// 	await this.$store.dispatch('DELETE_GIG', id)
		// 	await this.$store.dispatch('LOAD_GISS')
		// }
	},
	async mounted () {
		await this.$store.dispatch('LOAD_MEMBERS')
		await this.$store.dispatch('LOAD_SONGS')
		await this.$store.dispatch('LOAD_VIDEOS')
		await this.$store.dispatch('LOAD_MEMBERS')
		// await this.$store.dispatch('LOAD_GIGS')
		this.collapsibleInstance = M.Collapsible.init(this.$refs.collapsible, {})
	},
	computed: {
		members () {
			return this.$store.getters.getMembers
		},
		songs () {
			return this.$store.getters.getSongs
		},
		videos () {
			return this.$store.getters.getVideos
		}
	}
}
</script>

<style scoped>
.new-button-container {
	margin-top: -15px;
	margin-bottom: 10px;
}
</style>
