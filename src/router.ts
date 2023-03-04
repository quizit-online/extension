import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './pages/index.vue'
import Quizizz from './pages/quizizz.vue'
import Edpuzzle from './pages/edpuzzle.vue'
import Brainly from './pages/brainly.vue'
import Testportal from './pages/testportal.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/quizizz',
    name: 'Quizizz',
    component: Quizizz,
  },
  {
    path: '/edpuzzle',
    name: 'Edpuzzle',
    component: Edpuzzle,
  },
  {
    path: '/brainly',
    name: 'Brainly',
    component: Brainly,
  },
  {
    path: '/testportal',
    name: 'Testportal',
    component: Testportal,
  },
]

export default createRouter({ history: createWebHashHistory(), routes })
