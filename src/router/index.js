import Vue from 'vue';
import VueRouter from 'vue-router';
// import store from '../store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('@/views/Settings.vue')
    // meta: {
    //   requiresAuth: true
    // }
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    meta: {
      layout: () => import('@/layouts/Default.vue')
    }
  },
  {
    path: '/shop/:slug/:orderingStepSlug?',
    name: 'Shop',
    component: () => import('@/views/Shop.vue'),
    meta: {
      requiresAuth: true,
      layout: () => import('@/layouts/ShopLayout.vue')
    }
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

// router.beforeEach(async (to, from, next) => {
//   if (!to.meta.needsUserInfo) {
//     next();
//   }

//   const pingResult = await store.dispatch('auth/ping');

//   if (to.meta.requiresAuth) {
//     if (pingResult === 'IS_LOGGED_OUT') {
//       await router.push({ name: 'Home' });
//       setTimeout(function() {
//         window.location.reload();
//       });
//     }
//   }

//   if (to.meta.needsUserInfo) {
//     // wait for user info, then go to route
//     next();
//   }
// });

export default router;
