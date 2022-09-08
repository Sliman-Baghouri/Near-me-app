import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue';
import AppLayout from '../layouts/AppLayout';
import whatsOpen from  '@/views/whatsOpen.vue';
import vendor from  '@/views/VendorView.vue';
import festivals from  '@/views/festivals.vue';

const routes = [
  {
    path: "/",
    redirect: { name: 'whats-open' },
  },
  {
    path: "/:catchAll(.*)",
    redirect: { name: 'whats-open' },

  },
  {
    path: '/',
    name: 'home',
    component: AppLayout,
    children:[
      {
        name:'whats-open',
        path:'/whats-open',
        component: whatsOpen,
      },
      {
        name:'vendor',
        path:'/vendors',
        component: vendor,
      },
      {
        name:'festivals',
        path:'/festivals',
        component: festivals,
      },
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
