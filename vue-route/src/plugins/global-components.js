import Vue from 'vue'
import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'

Vue.component(Navbar.name, Navbar)
Vue.component(Sidebar.name, Sidebar)
Vue.component('card', () => import('@/components/Card.vue'))
Vue.component('pagination', () => import('@/components/Pagination.vue'))
Vue.component('list-layout', () => import('@/components/ListLayout.vue'))
