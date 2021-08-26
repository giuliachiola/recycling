import Vue from 'vue'
import Router from 'vue-router'

// templates
import templateHome from '@templates/templateHome'
import templateBin from '@templates/templateBin'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'templateHome',
    component: templateHome,
    meta: {
      title: 'Recycling | Home'
    }
  },
  {
    path: '/bin/:search',
    name: 'templateBin',
    component: templateBin,
    meta: {
      title: 'Recycling | Materiale'
    }
  }
  ]
})
