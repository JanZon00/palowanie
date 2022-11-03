import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeVue.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/liczby',
    name: 'liczby',
    component: () => import('../views/NumbersVue.vue')
  },
  {
    path: '/binarne',
    name: 'binarne',
    component: () => import('../views/BinaryVue.vue')
  },
  {
    path: '/karty',
    name: 'karty',
    component: () => import('../views/CardsVue.vue')
  },
  {
    path: '/litery',
    name: 'litery',
    component: () => import('../views/LettersVue.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
