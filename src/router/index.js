import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import NotFound from '@/views/NotFound.vue'
import Register from '@/views/Register.vue'
import Cursos from '@/views/Cursos.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/cursos',
    name: 'Cursos',
    component: Cursos,
    meta: {
      login: true,
    },
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
