import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import {router} from './router'
import './assets/styles.css'
import './plugins/global-components'
import 'animate.css'
import VueProgressBar from 'vue-progressbar'

Vue.config.productionTip = false

const options = {
  color: '#68d391',
  failedColor: '#874b4b',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'top',
  inverse: false
}

Vue.use(VueProgressBar, options)

Vue.filter('capitalize', val => {
  const value = val.split(' ')
  return value.map(str => str.charAt(0).toUpperCase() + str.slice(1)).join(' ')
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
