import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'


const routes = [
  {
    path: '/Portfolio/homepage.html',
    name: 'Root',
    component:Home
  },
  {
    path: '/Portfolio/signin.html',
    name: 'Root1',
    component:()=>import('../../Signin/views/signIn')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router