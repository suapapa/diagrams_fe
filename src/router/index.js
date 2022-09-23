import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Nodes from '../views/Nodes.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/node_search',
    name: 'Nodes',
    component: Nodes
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/*',
    component: NotFound,
  }
]

const router = createRouter({
  // base: '/dgsb',
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
