import Vue from 'vue';
import VueRouter from 'vue-router';
import DefaultLayout from '@/layouts/Default.vue';
import StoreLayout from '@/layouts/Store.vue';
import Home from '@/views/Home.vue';
import Welcome from '@/views/Welcome.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { layout: StoreLayout }
  },
  {
    path: '/welcome',
    name: 'Welcome',
    component: Welcome,
    meta: { layout: DefaultLayout }
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
