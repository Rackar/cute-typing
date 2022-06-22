import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import GamePage from '../views/GamePage.vue'
import AboutPage from '../views/AboutPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Game',
    component: GamePage,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
