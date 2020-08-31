import Vue from 'vue'
import VueTailwindModal from "vue-tailwind-modal"

Vue.component("VueTailwindModal", VueTailwindModal)
Vue.component('nav-bar', () => import('../components/Navbar.vue'))
Vue.component('side-bar', () => import('../components/Sidebar.vue'))
Vue.component('crud-layout', () => import('../components/CrudLayout.vue'))
Vue.component('card', () => import('../components/Card.vue'))
Vue.component('action-button', () => import('../components/ActionButton.vue'))
