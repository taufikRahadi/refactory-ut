import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/style.css'
import 'animate.css'

Vue.config.productionTip = false

Vue.filter('currency', val => {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(val)
})
Vue.component('card-list', () => import(/* webpackChunkName: 'card-list' */'./components/CardList.vue'))
Vue.component('base-alert', () => import(/* webpackChunkName: 'base-alert' */'./components/Alert.vue'))
Vue.component('base-card', () => import(/* webpackChunkName: 'base-card' */'./components/Card.vue'))

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
