export const authRoutes = [
  {
    path: '/welcome',
    name: 'Welcome',
    component: () => import('@/views/Welcome.vue'),
    meta: { layout: () => import('@/layouts/TenantLayout.vue') }
  },
  {
    path: '/auth/sign-up/:step',
    name: 'SignUp',
    props: true,
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
    path: '/auth/sign-up/success/:slug',
    name: 'SignUpSuccess',
    component: () => import('@/components/auth/SignUpSuccess.vue'),
    meta: { layout: () => import('@/layouts/TenantLayout.vue') }
  }
];
