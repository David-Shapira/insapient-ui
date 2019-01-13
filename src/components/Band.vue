<template>
  <div class="band">
		<section id="band-section" ref="bandRef">
			<h3 class="grey darken-4 grey-text text-lighten-4 z-depth-4">Band</h3>
			<div class="container">
				<div class="row">
					<div v-for="member in members" :key="member._id" class="col s12 m4">
						<div class="card grey darken-4">
							<div class="card-image waves-effect waves-block waves-light">
								<img class="activator" :src="member.image">
							</div>
							<div class="card-content">
								<span class="card-title activator grey-text text-lighten-4">{{member.name}} - {{member.instrument}}
								</span>
							</div>
							<div class="card-reveal grey darken-4">
								<span class="card-title grey-text text-lighten-4">{{member.name}} - {{member.instrument}}
									<i class="material-icons right">close</i>
								</span>
								<p class="grey-text text-lighten-4">{{member.info}}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import M from 'materialize-css/dist/js/materialize.js'

export default {
	name: 'band',
	data () {
		return {
			scrollSpyInstance: null
		}
	},
	mounted () {
		this.$store.dispatch('LOAD_MEMBERS')
		this.scrollSpyInstance = M.ScrollSpy.init(this.$refs.bandRef, {})
	},
	computed: {
		members () {
			return this.$store.getters.getMembers
		}
	}
}
</script>

<style scoped>

</style>
