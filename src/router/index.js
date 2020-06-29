import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';

import { customerViewRoutes } from './customerViewRoutes';
import { tenantCMSRoutes } from './tenantCMSRoutes';
import { authRoutes } from './authRoutes';
import { settingRoutes } from './settingRoutes';

Vue.use(VueRouter);

// If you use prefixRoutes function, make sure that your child routes start with a '/'
function prefixRoutes(prefix, routes) {
  return routes.map(route => {
    route.path = prefix + '' + route.path;
    return route;
  });
}

const routes = [
  ...customerViewRoutes,
  ...settingRoutes,
  ...prefixRoutes('/tenant/:tenantSlug/menu', [...tenantCMSRoutes]),
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
