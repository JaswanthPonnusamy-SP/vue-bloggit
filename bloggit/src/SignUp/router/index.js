import { createRouter, createWebHistory } from 'vue-router'
import Signup from '../views/signUp'


const routes = [
  {
    path: '/Portfolio/signup.html',
    name: 'signup',
    component:Signup
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router