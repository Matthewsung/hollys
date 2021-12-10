import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import('@/components/main')
  },
  {
    path: '/prepare',
    name: 'Prepare',
    component: () => import('@/components/prepare.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/components/login')
  },
  {
    path: '/menu/:beverage',
    name: 'Menu',
    component: () => import('@/components/menu'),
    props: true,
  }
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;