import Vue from 'vue';
import VueRouter from 'vue-router';
import tenantMenuRoutes from './tenantMenuRoutes';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    meta: { layout: () => import('@/layouts/Default.vue') }
  },
  {
    path: '/shop/:slug/:orderingStepSlug?',
    name: 'Shop',
    component: () => import('@/views/Shop.vue'),
    meta: { layout: () => import('@/layouts/ShopLayout.vue') }
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('@/views/Settings.vue'),
    meta: {
      layout: () => import('@/layouts/TenantLayout.vue'),
      appBar: {
        title: 'Settings',
        backRoute: { name: 'Home' }
      }
    },
    children: [
      {
        path: 'account',
        name: 'Account',
        component: () => import('@/views/SettingsAccount.vue'),
        meta: {
          layout: () => import('@/layouts/TenantLayout.vue'),
          appBar: {
            title: 'Account',
            backRoute: { name: 'Settings' }
          }
        }
      },
      {
        path: 'business',
        name: 'Business',
        component: () => import('@/views/SettingsBusiness.vue'),
        meta: {
          layout: () => import('@/layouts/TenantLayout.vue'),
          appBar: {
            title: 'Business',
            backRoute: { name: 'Settings' }
          }
        }
      },
      {
        path: 'business/info',
        name: 'BusinessInfo',
        component: () => import('@/views/SettingsMyBusinessInfo.vue'),
        meta: {
          layout: () => import('@/layouts/TenantLayout.vue'),
          appBar: {
            title: 'Business Info',
            backRoute: { name: 'Business' }
          }
        }
      },
      {
        path: 'hours',
        name: 'BusinessHours',
        component: () => import('@/views/SettingsMyBusinessHours.vue'),
        meta: {
          layout: () => import('@/layouts/TenantLayout.vue'),
          appBar: {
            title: 'Business Hours',
            backRoute: { name: 'Business' }
          }
        }
      },
      {
        path: 'location',
        name: 'BusinessLocation',
        component: () => import('@/views/SettingsMyBusinessLocation.vue'),
        meta: {
          layout: () => import('@/layouts/TenantLayout.vue'),
          appBar: {
            title: 'Business Location',
            backRoute: { name: 'Business' }
          }
        }
      }
    ]
  },
  ...tenantMenuRoutes,
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

export default router;
