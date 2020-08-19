import Vue from 'vue'
import App from './App.vue'
import './assets/styles.css'
import 'animate.css'

Vue.config.productionTip = false
Vue.component('search-field', () => import('./components/SearchField.vue'))
Vue.component('task-box', () => import('./components/TaskBox.vue'))

new Vue({
  render: h => h(App),
}).$mount('#app')
