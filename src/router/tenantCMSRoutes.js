import store from '@/store';

export const tenantCMSRoutes = [
  {
    path: '/tenant/:tenantSlug/menu',
    name: 'Menu',
    component: () => import('@/views/Menu.vue'),
    meta: { layout: () => import('@/layouts/TenantLayout.vue') },
    children: [
      {
        path: 'categories',
        name: 'MenuCategoryList',
        component: () => import('@/views/MenuCategoryList.vue'),
        meta: {
          appBar: {
            title: 'Categories',
            backRoute: { name: 'Home' },
            newItem: { name: 'MenuCategoryAdd' }
          }
        }
      },
      {
        path: 'categories/add',
        name: 'MenuCategoryAdd',
        component: () => import('@/views/MenuCategoryAddEdit.vue'),
        meta: {
          appBar: {
            title: 'Add new category',
            backRoute: { name: 'MenuCategoryList' }
          }
        }
      },
      {
        path: 'categories/:categoryId/edit',
        name: 'MenuCategoryEdit',
        component: () => import('@/views/MenuCategoryAddEdit.vue'),
        meta: {
          appBar: {
            title: 'Edit category',
            backRoute: { name: 'MenuCategoryList' }
          }
        }
      },
      {
        path: 'categories/:categoryId/items',
        name: 'MenuItemList',
        component: () => import('@/views/MenuItemList.vue'),
        beforeEnter: (to, from, next) => {
          store
            .dispatch('menu/fetchTenantCategoryById', to.params)
            .then(() => {
              to.meta.appBar.title = store.getters['menu/getCategoryName'];
              next();
            })
            .catch(() => {
              to.meta.appBar.title = 'Category';
              next();
            });
        },
        meta: {
          appBar: {
            backRoute: { name: 'MenuCategoryList' },
            newItem: { name: 'MenuItemAdd' }
          }
        }
      },
      {
        path: 'categories/:categoryId/items/add',
        name: 'MenuItemAdd',
        component: () => import('@/views/MenuItemAddEdit.vue'),
        meta: {
          appBar: {
            title: 'Add new item',
            backRoute: { name: 'MenuItemList' }
          }
        }
      },
      {
        path: 'categories/:categoryId/items/:item/edit',
        name: 'MenuItemEdit',
        component: () => import('@/views/MenuItemAddEdit.vue'),
        meta: {
          appBar: {
            title: 'Edit item',
            backRoute: {
              name: 'MenuItemList',
              params: { categoryId: 'BagelsAndBread' }
            }
          }
        }
      }
    ]
  }
];
