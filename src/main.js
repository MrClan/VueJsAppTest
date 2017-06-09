// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueGoodTable from 'vue-good-table'
import * as VueGoogleMaps from 'vue2-google-maps'
import { $, jQuery } from 'jquery'

window.$ = $
window.jQuery = jQuery

Vue.use(VueGoodTable)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDEC88og9a7lopTYaKHOvIcJnMhAUALa5Y'
      // v: 'OPTIONAL VERSION NUMBER'
      // libraries: 'places', //// If you need to use place input
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
