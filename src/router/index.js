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
    path: '/menu',
    name: 'Menu',
    component: () => import('@/components/menu'),
    children: [
      {
        path: '/menu/espresso',
        component: () => import('@/components/menu/espresso.vue')
      },
      {
        path: 'signature',
        component: () => import('@/components/menu/signature.vue')
      },
      {
        path: 'hollyccino',
        component: () => import('@/components/menu/hollyccino.vue')
      },
      {
        path: 'tea',
        component: () => import('@/components/menu/tea.vue')
      },
      {
        path: 'bakery',
        component: () => import('@/components/menu/bakery.vue')
      },
      {
        path: 'md',
        component: () => import('@/components/menu/md.vue')
      },
      {
        path: 'bean',
        component: () => import('@/components/menu/bean.vue')
      }
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;