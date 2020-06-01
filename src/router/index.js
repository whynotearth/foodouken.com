import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    meta: { layout: () => import('@/layouts/Default.vue') }
  },
  {
    path: '/shop/:slug/:orderingStepSlug?',
    name: 'Shop',
    component: () => import('@/views/Shop.vue'),
    meta: { layout: () => import('@/layouts/ShopLayout.vue') }
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('@/views/Settings.vue'),
    meta: { layout: () => import('@/layouts/TenantLayout.vue') }
  },
  {
    path: '/settings/account',
    name: 'Account',
    component: () => import('@/views/Account.vue'),
    meta: { layout: () => import('@/layouts/TenantLayout.vue') }
  },
  {
    path: '/settings/business',
    name: 'Business',
    component: () => import('@/views/Business.vue'),
    meta: { layout: () => import('@/layouts/TenantLayout.vue') }
  },
  {
    path: '/welcome',
    name: 'Welcome',
    component: () => import('@/views/Welcome.vue'),
    meta: { layout: () => import('@/layouts/TenantLayout.vue') }
  },
  {
    path: '/auth/sign-up/:step',
    name: 'SignUp',
    component: () => import('@/views/SignUp.vue'),
    meta: { layout: () => import('@/layouts/TenantLayout.vue') }
  },
  {
    path: '/auth/login',
    name: 'LogIn',
    component: () => import('@/views/LogIn.vue'),
    meta: { layout: () => import('@/layouts/TenantLayout.vue') }
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
