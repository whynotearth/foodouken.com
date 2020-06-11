export const settingRoutes = [
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
    component: () => import('@/views/SettingsAccount.vue'),
    meta: { layout: () => import('@/layouts/TenantLayout.vue') }
  },
  {
    path: '/settings/business',
    name: 'Business',
    component: () => import('@/views/SettingsBusiness.vue'),
    meta: { layout: () => import('@/layouts/TenantLayout.vue') }
  }
];
