<template>
		<div class="container">
			<h1>Manage Members</h1>
			<div class="row">
				<form @submit.prevent="handleSubmit" class="col s12">
					<div class="input-field">
						<input type="text" id="memberName" class="validate" v-model="member.name">
						<label class="active" for="memberName">Name</label>
					</div>
					<div class="input-field">
						<input type="text" id="memberInstrument" class="validate" v-model="member.instrument">
						<label class="active" for="memberInstrument">Instrument</label>
					</div>
					<div class="input-field">
						<input type="text" id="memberInfo" class="validate" v-model="member.info">
						<label class="active" for="memberInfo">Info</label>
					</div>
					<div class="input-field">
						<input type="text" id="memberImage" class="validate" v-model="member.image">
						<label class="active" for="memberImage">Image</label>
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
			member: {
				name: '',
				instrument: '',
				info: '',
				image: ''
			}		
		}
	},
	methods: {
		async handleSubmit () {
			if (this.$store.getters.getEditMode === true) {
				await this.$store.dispatch('UPDATE_MEMBER', {
					id: this.$route.params.id,
					name: this.member.name,
					instrument: this.member.instrument,
					info: this.member.info,
					image: this.member.image
				})
			}
			else {
				console.log(this.member)
				await this.$store.dispatch('ADD_MEMBER', {
					name: this.member.name,
					instrument: this.member.instrument,
					info: this.member.info,
					image: this.member.image
				})
			}
			this.$router.push({ name: 'admin' })
		}
	},
	async mounted () {
		if (this.$store.getters.getEditMode === true) {
			await this.$store.dispatch('LOAD_MEMBER', this.$route.params.id)
			let storedMember = this.$store.getters.getMember
			this.member.name = storedMember.name
			this.member.instrument = storedMember.instrument
			this.member.info = storedMember.info
			this.member.image = storedMember.image
		}
	},
	destroyed () {
			if (this.$store.getters.getEditMode === true) {
				this.$store.commit('TOGGLE_EDIT_MODE')
			}
	}
}
</script>

