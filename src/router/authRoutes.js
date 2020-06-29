import store from '@/store';

export const authRoutes = [
  {
    path: '/welcome',
    name: 'Welcome',
    component: () => import('@/views/AuthWelcome.vue'),
    meta: { layout: () => import('@/layouts/TenantLayout.vue') }
  },
  {
    path: '/auth/sign-up/:step',
    name: 'SignUp',
    props: true,
    component: () => import('@/views/AuthSignUp.vue'),
    meta: { layout: () => import('@/layouts/TenantLayout.vue') }
  },
  {
    path: '/auth/login',
    name: 'LogIn',
    component: () => import('@/views/AuthLogIn.vue'),
    meta: { layout: () => import('@/layouts/TenantLayout.vue') },
    beforeEnter: async (to, from, next) => {
      if (to.query.token) {
        await store.commit('auth/updateToken', to.query.token);
      }

      store
        .dispatch('auth/ping')
        .then(response => {
          if (response.isAuthenticated) {
            next({ name: 'Home' });
          } else {
            throw new Error('USER_NOT_LOGGED_IN');
          }
        })
        .catch(() => {
          next();
        });
    }
  },
  {
    path: '/auth/sign-up/success/:slug',
    name: 'SignUpSuccess',
    component: () => import('@/components/auth/SignUpSuccess.vue'),
    meta: { layout: () => import('@/layouts/TenantLayout.vue') }
  }
];
