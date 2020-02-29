import Vue from 'vue'
import App from './App.vue'

import axios from './plugins/axios'
import store from './store'
import router from './router'

// sass
import './styles/main.sass'

Vue.config.productionTip = false

new Vue({
  axios,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
