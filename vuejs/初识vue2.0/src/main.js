import Vue from 'vue'
import VueResource from 'vue-resource'
import Layout from './components/Layout'
import router from './router'

Vue.config.productionTip = false
Vue.use(VueResource)

new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout }
})
