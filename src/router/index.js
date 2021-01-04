import { createRouter, createWebHistory } from 'vue-router'
import { defineAsyncComponent } from 'vue'
import Loader from '../components/Loader.vue'

const Home = defineAsyncComponent({
  loader: () => import('../views/Home.vue'),
  delay: 200,
  loadingComponent: Loader
})
const About = defineAsyncComponent({
  loader: () => import('../views/About.vue'),
  delay: 200,
  loadingComponent: Loader
})
const Profile = defineAsyncComponent({
  loader: () => import('../views/Profile.vue'),
  delay: 200,
  loadingComponent: Loader
})
const Categories = defineAsyncComponent({
  loader: () => import('../views/Categories.vue'),
  delay: 200,
  loadingComponent: Loader
})
const Support = defineAsyncComponent({
  loader: () => import('../views/Support.vue'),
  delay: 200,
  loadingComponent: Loader
})
const Report = defineAsyncComponent({
  loader: () => import('../views/Report.vue'),
  delay: 200,
  loadingComponent: Loader
})
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories
  },
  {
    path: '/support',
    name: 'Support',
    component: Support
  },
  {
    path: '/report',
    name: 'Report',
    component: Report
  },
  {
    path: '/pricing',
    name: 'Pricing',
    component: () => import(/* webpackChunkName: "pricing" */ '../views/Pricing.vue')
  },
  {
    path: '/logout',
    name: 'Logout',
    component: () => import(/* webpackChunkName: "logout" */ '../views/Logout.vue')
  },
  {
    path: '/payment',
    name: 'Payment',
    component: () => import(/* webpackChunkName: "payment" */ '../views/Payment.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
