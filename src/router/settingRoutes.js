export const settingRoutes = [
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('@/views/Settings.vue'),
    meta: {
      layout: () => import('@/layouts/TenantLayout.vue'),
      requiresAuth: true,
      appBar: {
        title: 'Settings',
        backRoute: { name: 'Home' }
      }
    }
  },
  {
    path: '/settings/account',
    name: 'Account',
    component: () => import('@/views/SettingsAccount.vue'),
    meta: {
      layout: () => import('@/layouts/TenantLayout.vue'),
      requiresAuth: true,
      appBar: {
        title: 'My Account',
        backRoute: { name: 'Settings' }
      }
    }
  },
  {
    path: '/settings/business',
    name: 'Business',
    component: () => import('@/views/SettingsBusiness.vue'),
    meta: {
      layout: () => import('@/layouts/TenantLayout.vue'),
      requiresAuth: true,
      appBar: {
        title: 'My Business',
        backRoute: { name: 'Settings' }
      }
    }
  },
  {
    path: '/settings/promotion',
    name: 'Promotion',
    component: () => import('@/views/Promotion.vue'),
    meta: {
      layout: () => import('@/layouts/TenantLayout.vue'),
      requiresAuth: true,
      appBar: {
        title: 'Promotions',
        backRoute: { name: 'Settings' }
      }
    }
  }
];
