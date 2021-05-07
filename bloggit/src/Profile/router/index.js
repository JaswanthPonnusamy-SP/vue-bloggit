import { createRouter, createWebHistory } from 'vue-router'
import Profile from '../views/Profile'


const routes = [
  {
    path: '/profile/:id',
    name: 'profile',
    component:Profile,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router