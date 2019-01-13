import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/Main.vue'
import Admin from '../components/Admin.vue'
import ManageSongs from '../components/ManageSongs.vue'
import ManageVideos from '../components/ManageVideos.vue'
import ManageMembers from '../components/ManageMembers.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'main',
			component: Main
		},
		{
			path: '/admin',
			name: 'admin',
			component: Admin
		},
		{
			path: '/manageSongs/new',
			name: 'manageSongsNew',
			component: ManageSongs
		},
		{
			path: '/manageSongs/:id',
			name: 'manageSongsEdit',
			component: ManageSongs
		},
		{
			path: '/manageVideos/new',
			name: 'manageVideosNew',
			component: ManageVideos
		},
		{
			path: '/manageVideos/:id',
			name: 'manageVideosEdit',
			component: ManageVideos
		},
		{
			path: '/manageMembers/new',
			name: 'manageMembersNew',
			component: ManageMembers
		},
		{
			path: '/manageMembers/:id',
			name: 'manageMembersEdit',
			component: ManageMembers
		}
	]
})