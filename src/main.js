// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App'
import Blog from './components/Blog.vue'
import Resume from './components/Resume.vue'

import 'bulma/css/bulma.css'
import 'font-awesome/css/font-awesome.min.css'

Vue.use(require('vue-moment'))
Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/blog', component: Blog },
    { path: '/resume', component: Resume },
    { path: '*', redirect: '/resume' }
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
