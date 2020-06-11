import Vue from 'vue';
import VueRouter from 'vue-router';
import tenantMenuRoutes from './tenantMenuRoutes';
import { authRoutes } from './authRoutes';
import store from '../store';

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
    meta: {
      layout: () => import('@/layouts/TenantLayout.vue'),
      requiresAuth: true
    }
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
  ...tenantMenuRoutes,
  ...authRoutes,
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

router.beforeEach(async (to, from, next) => {
  if (to.meta.requiresAuth) {
    const pingResult = await store.dispatch('auth/ping');

    if (!pingResult) {
      next({ name: 'Welcome' });
    }

    if (pingResult.isAuthenticated) {
      next();
    }
  } else {
    next();
  }
});

export default router;
