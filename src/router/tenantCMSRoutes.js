import store from '@/store';

export const tenantCMSRoutes = [
  {
    path: '/tenant/:tenantSlug/menu',
    name: 'Menu',
    component: () => import('@/views/Menu.vue'),
    meta: {
      layout: () => import('@/layouts/TenantLayout.vue'),
      requiresAuth: true
    },
    children: [
      {
        path: 'categories',
        name: 'MenuCategoryList',
        component: () => import('@/views/MenuCategoryList.vue'),
        meta: {
          requiresAuth: true,
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
          requiresAuth: true,
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
          requiresAuth: true,
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
          let params = {
            tenantSlug: to.params.tenantSlug,
            categoryId: to.params.categoryId
          };
          store
            .dispatch('menu/fetchTenantCategoryById', params)
            .then(category => {
              to.meta.appBar.title = category.name;
              next();
            })
            .catch(error => {
              to.meta.appBar.title = 'Category';
              next();
              throw new Error(error.message);
            });
        },
        meta: {
          requiresAuth: true,
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
          requiresAuth: true,
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
          requiresAuth: true,
          appBar: {
            title: 'Edit item',
            backRoute: {
              name: 'MenuItemList'
            }
          }
        }
      }
    ]
  }
];
