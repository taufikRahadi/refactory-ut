import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/posts',
    name: 'Post',
    redirect: { name: 'ListPost' },
    component: () => import('../views/Posts.vue'),
    meta: {
      requiresAuth: true
    },
    children: [
      {
        name: 'ListPost',
        path: ':page',
        component: () => import('../views/posts/List.vue')
      },
      {
        name: 'DetailPost',
        path: ':id/detail',
        component: () => import('../views/posts/Detail.vue')
      }
    ],
  },
  {
    path: '/photos',
    name: 'Photo',
    redirect: { name: 'ListPhoto' },
    component: () => import('../views/Photos.vue'),
    children: [
      {
        name: 'ListPhoto',
        path: ':page',
        component: () => import('../views/photos/List.vue')
      },
      {
        name: 'DetailPhoto',
        path: ':id/detail',
        component: () => import('../views/photos/Detail.vue')
      }
    ]
  },
  {
    path: '/albums',
    name: 'Albums',
    redirect: { name: 'ListAlbum' },
    component: () => import('../views/Albums.vue'),
    children: [
      {
        name: 'ListAlbum',
        path: ':page',
        component: () => import('../views/albums/List.vue')
      },
      {
        name: 'DetailAlbum',
        path: ':id/detail',
        component: () => import('../views/albums/Detail.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(route => route.meta.requiresAuth)) {
    alert('this route is guarded')
    next({
      name: 'Home'
    })
  } else {
    next()
  }
})

export { router, routes }
