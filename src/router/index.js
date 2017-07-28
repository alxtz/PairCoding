import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import HomePage from '@/components/HomePage'

Vue.use(Router)

export default new Router({

  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    }
  ]
})
