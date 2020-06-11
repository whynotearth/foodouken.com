import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';

import { customerViewRoutes } from './customerViewRoutes';
import { tenantCMSRoutes } from './tenantCMSRoutes';
import { authRoutes } from './authRoutes';
import { settingRoutes } from './settingRoutes';

Vue.use(VueRouter);

const routes = [
  ...customerViewRoutes,
  ...settingRoutes,
  ...tenantCMSRoutes,
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
