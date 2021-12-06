import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import('@/components/main/index.vue')
  },
  {
    path: '/prepare',
    name: 'Prepare',
    component: () => import('@/components/prepare.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import ('@/components/login/index.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;