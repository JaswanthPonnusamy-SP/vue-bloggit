import { createRouter, createWebHistory } from 'vue-router'
import Bloggit from '../views/blog'


const routes = [
  {
    path: '/blogs/:id',
    name: 'bloggit',
    component:Bloggit,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
