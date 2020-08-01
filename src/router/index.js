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

router.beforeEach((to, from, next) => {
  store
    .dispatch('auth/ping')
    .then(response => {
      if (response && response.isAuthenticated) {
        next();
      } else {
        throw new Error();
      }
    })
    .catch(() => {
      if (!to.meta.requiresAuth) {
        return next();
      } else {
        next({ name: 'Welcome' });
      }
    });
});

export default router;
