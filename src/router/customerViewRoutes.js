export const customerViewRoutes = [
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
    meta: {
      layout: () => import('@/layouts/ShopLayout.vue'),
      appBar: {
        title: 'Shop',
        newItem: { name: 'Account' }
      }
    }
  },
  {
    path: '/privacy-policy',
    name: 'Privacy Policy',
    component: () => import('@/views/PrivacyPolicy.vue'),
    meta: { layout: () => import('@/layouts/Default.vue') }
  }
];
