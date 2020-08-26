import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/posts/:page',
    name: 'Post',
    component: () => import('../views/Posts.vue')
  },
  {
    path: '/photos/:page',
    name: 'Photo',
    component: () => import('../views/Photos.vue')
  },
  {
    path: '/album/:page',
    name: 'Albums',
    component: () => import('../views/Albums.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export { router, routes }
