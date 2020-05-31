import Vue from 'vue';
import VueRouter from 'vue-router';

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
    meta: { layout: () => import('@/layouts/TenantLayout.vue') }
  },
  {
    path: '/settings/account',
    name: 'Account',
    component: () => import('@/views/Account.vue'),
    meta: { layout: () => import('@/layouts/TenantLayout.vue') }
  },
  {
    path: '/settings/business',
    name: 'Business',
    component: () => import('@/views/Business.vue'),
    meta: { layout: () => import('@/layouts/TenantLayout.vue') }
  },
  {
    path: '/tenant/menu',
    name: 'Menu',
    component: () => import('@/views/Menu.vue'),
    children: [
      {
        path: 'categories',
        name: 'MenuCategoryList',
        component: () => import('@/views/MenuCategoryList.vue'),
        meta: { layout: () => import('@/layouts/TenantLayout.vue') }
      },
      {
        path: 'items',
        name: 'MenuItemList',
        component: () => import('@/views/MenuItemList.vue'),
        meta: { layout: () => import('@/layouts/TenantLayout.vue') }
      },
      {
        path: 'items/add',
        name: 'MenuItemsAdd',
        component: () => import('@/views/MenuItemsAddEdit.vue'),
        meta: { layout: () => import('@/layouts/TenantLayout.vue') }
      }
    ]
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

export default router;
