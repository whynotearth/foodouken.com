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
  if (to.meta.requiresAuth) {
    store
      .dispatch('auth/ping')
      .then(user => {
        if (user && user.isAuthenticated) {
          next();
        } else {
          throw new Error('User is not logged in');
        }
      })
      .catch(() => {
        next({ name: 'Welcome' });
      });
  } else {
    next();
  }
});

export default router;
