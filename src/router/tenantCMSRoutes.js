import store from '@/store';

export const tenantCMSRoutes = [
  {
    path: '/tenant/:tenantSlug/menu',
    name: 'Menu',
    component: () => import('@/views/Menu.vue'),
    beforeEnter: (to, from, next) => {
      if (from.name === 'Account') next();
      else {
        store
          .dispatch('tenant/userOwnsTenant', to.params.tenantSlug)
          .then(result => {
            if (result) {
              next();
            } else {
              next({ name: 'Account' });
              alert('You do not have permission to access this tenant!');
            }
          })
          .catch(error => {
            next({ name: 'Account' });
            throw new Error(error);
          });
      }
    },
    children: [
      {
        path: 'categories',
        name: 'MenuCategoryList',
        component: () => import('@/views/MenuCategoryList.vue'),
        beforeEnter: (to, from, next) => {
          if (to.params.tenant) {
            to.meta.appBar.title = to.params.tenant.name;
            next();
          } else {
            store
              .dispatch('shop/fetchShopData', to.params.tenantSlug)
              .then(tenant => {
                to.meta.appBar.title = tenant.name;
                next();
              })
              .catch(error => {
                to.meta.appBar.title = 'Categories';
                next();
                throw new Error(error);
              });
          }
        },
        meta: {
          layout: () => import('@/layouts/TenantLayout.vue'),
          requiresAuth: true,
          appBar: {
            title: 'Categories',
            backRoute: { name: 'Account' },
            newItem: { name: 'MenuCategoryAdd' }
          }
        }
      },
      {
        path: 'categories/add',
        name: 'MenuCategoryAdd',
        component: () => import('@/views/MenuCategoryAddEdit.vue'),
        meta: {
          layout: () => import('@/layouts/TenantLayout.vue'),
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
          layout: () => import('@/layouts/TenantLayout.vue'),
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
          layout: () => import('@/layouts/TenantLayout.vue'),
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
          layout: () => import('@/layouts/TenantLayout.vue'),
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
          layout: () => import('@/layouts/TenantLayout.vue'),
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
