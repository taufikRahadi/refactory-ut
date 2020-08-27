import Vue from 'vue'
import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'

Vue.component(Navbar.name, Navbar)
Vue.component(Sidebar.name, Sidebar)
Vue.component('card', () => import('@/components/Card.vue'))
Vue.component('pagination', () => import(/* webpackChunkName: "Pagination" */'@/components/Pagination.vue'))
Vue.component('list-layout', () => import(/* webpackChunkName: "Pagination" */'@/components/ListLayout.vue'))
Vue.component('detail-layout', () => import(/* webpackChunkName: "Pagination" */'@/components/DetailLayout.vue'))
