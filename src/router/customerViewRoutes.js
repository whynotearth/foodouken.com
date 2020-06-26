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
    meta: { layout: () => import('@/layouts/ShopLayout.vue') }
  },
  {
    path: '/shop/:slug/category/:categoryId/product/:productId',
    name: 'ShopProductDetail',
    props: true,
    component: () => import('@/views/ShopProductDetail.vue'),
    meta: { layout: () => import('@/layouts/ShopLayout.vue') }
  }
];
