import Vue from 'vue';
import VueRouter from 'vue-router';
import DefaultLayout from '@/layouts/Default.vue';
import ShopLayout from '@/layouts/ShopLayout.vue';
import Home from '@/views/Home.vue';
import Shop from '@/views/Shop.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { layout: DefaultLayout }
  },
  {
    path: '/shop/:slug',
    name: 'Shop',
    component: Shop,
    meta: { layout: ShopLayout }
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
