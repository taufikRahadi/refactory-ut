import Vue from 'vue'
import AppBar from '../components/AppBar.vue'

Vue.component('app-bar', AppBar)
Vue.component('product-card', () => import('../components/ProductCard.vue'))
Vue.component('product-list', () => import('../components/ProductList.vue'))
Vue.component('alert', () => import('../components/Alert.vue'))
Vue.component('cart', () => import('../components/Cart.vue'))
