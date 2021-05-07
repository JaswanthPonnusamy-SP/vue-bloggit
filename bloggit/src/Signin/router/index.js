import { createRouter, createWebHistory } from 'vue-router'
import Signin from '../views/signIn'


const routes = [
  {
    path: '/signin.html',
    name: 'signin',
    component:Signin
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router