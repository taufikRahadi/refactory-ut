import Vue from 'vue'
import App from './App.vue'
import './assets/styles.css'

Vue.config.productionTip = false
Vue.component('search-field', () => import('./components/SearchField.vue'))

new Vue({
  render: h => h(App),
}).$mount('#app')
