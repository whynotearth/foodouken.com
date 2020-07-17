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

router.options.scrollBehavior = function(to, from, savedPosition) {
  if (savedPosition) {
    //if going to the previous page with the back button or left swipe on mobile you are on the content you were last viewing
    return savedPosition;
  }
  if (to.hash) {
    //prevent the page from scrolling up when someone clicks "Order Now"
    if (document.URL.indexOf('/shop/') != -1) {
      //if were not on the /shop/ page then scroll to top of page on next view
      return { selector: to.hash };
    }
  }
  return { x: 0, y: 0 };
};

export default router;
