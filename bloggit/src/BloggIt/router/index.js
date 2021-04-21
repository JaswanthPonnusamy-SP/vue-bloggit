import { createRouter, createWebHistory } from 'vue-router'
import Bloggit from '../views/bloggIt'


const routes = [
  {
    path: '/bloggit.html',
    name: 'bloggit',
    component:Bloggit
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router