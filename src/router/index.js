import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import HomePage from '@/components/HomePage'
import EachPage from '@/components/EachPage'
import BumpPage from '@/components/BumpPage'
import CloudTicket from '@/components/CloudTicket'
import EarTraining from '@/components/EarTraining'
import MusicGalaxy from '@/components/MusicGalaxy'

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
      path: '/BumpPage',
      name: 'BumpPage',
      component: BumpPage
    },
    {
      path: '/EachPage',
      name: 'EachPage',
      component: EachPage
    },
    {
      path: '/MusicGalaxy',
      name: 'MusicGalaxy',
      component: MusicGalaxy
    },
    {
      path: '/EarTraining',
      name: 'EarTraining',
      component: EarTraining
    },
    {
      path: '/CloudTicket',
      name: 'CloudTicket',
      component: CloudTicket
    }
  ]
})
