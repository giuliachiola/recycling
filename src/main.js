// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import dovelobutto from './dovelobutto.js'

import 'material-design-lite/dist/material.min.css'
import 'material-design-lite/dist/material.min.js'
// material design di default NON ha il componente <select> in style mdl quindi uso:
import 'mdl-select-component/mdl-selectfield.min.css'
import 'mdl-select-component/mdl-selectfield.min.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  methods: {
    getCities () {
      dovelobutto.getCities()
    }
  }
})
