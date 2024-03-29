import Vue from 'vue'
import App from './components/app/App.vue'
import router from './router'

import {store} from "./services/message.service"

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
