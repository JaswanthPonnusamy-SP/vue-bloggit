import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'


const routes = [
  {
    path: '/homepage.html',
    name: 'Root',
    component:Home
  },
  {
    path: '/signin.html',
    name: 'Root1',
    component:()=>import('../../Signin/views/signIn')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router