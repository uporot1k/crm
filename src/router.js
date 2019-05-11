import Vue from 'vue';
import Router from 'vue-router';


Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('@/views/Home'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
    },
    {
      path: '/task/edit',
      name: 'eidt',
      component: () => import('@/views/Edit.vue'),
    },
    {
      path: '/task/list',
      name: 'list',
      component: () => import('@/views/TasksList.vue'),
    },
    {
      path: '/task/:id',
      name: 'detail',
      component: () => import('@/views/Detail.vue'),
    },
  ],
});
