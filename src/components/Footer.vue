<template>
  <div class="footer">
		<footer class="grey darken-4 z-depth-4">
			<div>
				<div class="row valign-wrapper">
					<div class="col offset-s1 s3">
						<a href="https://il.linkedin.com/in/andrey-galchevski-b40999a3">
							<div class="brand-logo left">
								<div class="bracket">[</div>
								<div class="amp">&</div>
								<div class="amp">&</div>
								<div class="bracket">]</div>
							</div>
						</a>
					</div>
					<div class="col offset-s4 s3 copyrights-text">
						© {{thisYear}} Insapient All Rights Reserved 
					</div>
				</div>
			</div>
		</footer>
  </div>
</template>

<script>

export default {
	name: 'Footer',
	data() {
		return {
			thisYear: null
		}
	},
	mounted() {
		let now = new Date()
		this.thisYear = now.getFullYear()
	}
}
</script>

<style scoped>
.footer {
	color: #fafafa;
	font-size: 1.5vh;
}
.row {
	margin-bottom: 0px;
}
.brand-logo {
	font-family: 'Merriweather', serif;
	font-size: 20px;
}
.brand-logo div {
	display: inline-block;
}
.bracket {
	color: #03a9f4;
}
.amp {
	color: white;
}
</style>
