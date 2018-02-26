// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store/store'

import 'material-design-lite/dist/material.min.css'
import 'material-design-lite/dist/material.min.js'
// material design di default NON ha il componente <select> in style mdl quindi uso:
import 'mdl-select-component/mdl-selectfield.min.css'
// import 'mdl-select-component/mdl-selectfield.min.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',

  created () {
    this.$store.dispatch('getProvinces')
    this.$store.dispatch('getGarbageDefault')
  }
})
