// import {createWebHistory, createRouter} from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import('@/components/main/mainSlide.vue')
  }
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});