import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeVue.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { transition: 'slide', mode: 'default'},
  },
  {
    path: '/liczby',
    name: 'liczby',
    component: () => import('../views/NumbersVue.vue'),
    meta: { transition: 'grow-in', mode: 'out-in'},
  },
  {
    path: '/binarne',
    name: 'binarne',
    component: () => import('../views/BinaryVue.vue'),
    meta: { transition: 'grow-in', mode: 'out-in'},
  },
  {
    path: '/karty',
    name: 'karty',
    component: () => import('../views/CardsVue.vue'),
    meta: { transition: 'grow-in', mode: 'out-in'},
  },
  {
    path: '/litery',
    name: 'litery',
    component: () => import('../views/LettersVue.vue'),
    meta: { transition: 'grow-in', mode: 'out-in'},
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
