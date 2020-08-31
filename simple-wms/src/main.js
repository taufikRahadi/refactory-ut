import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import {router} from './router'
import store from './store'
import './assets/style.css'
import './plugins/globalComponent'
import VueProgressBar from 'vue-progressbar'
import VueTailwindPicker from 'vue-tailwind-picker'

const options = {
  color: '#38b2ac',
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
Vue.use(VueTailwindPicker);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
