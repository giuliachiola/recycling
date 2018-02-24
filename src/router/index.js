import Vue from 'vue'
import Router from 'vue-router'

// templates
import templateHome from '@templates/templateHome'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'TemplateHome', component: templateHome, meta: { title: 'Dove lo butto | Home' } }
    // { path: '/', name: 'TemplateNewProduct', component: TemplateProducts, meta: { title: 'Hub Scuola DAM | Nuovo' } }
  ]
})
