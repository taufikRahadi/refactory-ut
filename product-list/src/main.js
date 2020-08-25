import Vue from 'vue'
import App from './App.vue'
import './assets/styles.css'
import './plugins/global-components'
import './plugins/filters'
import 'animate.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
