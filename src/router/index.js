import Vue from 'vue';
import VueRouter from 'vue-router';
import DefaultLayout from '@/layouts/Default.vue';
import StoreLayout from '@/layouts/Store.vue';
import Home from '@/views/Home.vue';
import Store from '@/views/Store.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { layout: DefaultLayout }
  },
  {
    path: '/store/:slug',
    name: 'Store',
    component: Store,
    meta: { layout: StoreLayout }
  },
  {
    path: '/*',
    redirect: '/'
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
