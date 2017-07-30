import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import HomePage from '@/components/HomePage'
import EachPage from '@/components/EachPage'

Vue.use(Router)

export default new Router({

  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/EachPage',
      name: 'EachPage',
      component: EachPage
    }
  ]
})
