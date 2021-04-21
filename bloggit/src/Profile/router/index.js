import { createRouter, createWebHistory } from 'vue-router'
import Profile from '../views/Profile'


const routes = [
  {
    path: '/profile.html',
    name: 'profile',
    component:Profile
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router