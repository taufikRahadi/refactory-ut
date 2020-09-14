import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: { name: 'book list' },
    children: [
      {
        name: 'book list',
        path: 'list',
        component: () => import(/* webpackChunkName: 'Book List' */'../views/BookList.vue')
      },
      {
        name: 'cart',
        path: 'cart',
        component: () => import(/* webpackChunkName: 'Cart' */'../views/Cart.vue')
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
