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

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
