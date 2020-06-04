const tenantRoutes = [
  {
    path: '/tenant/menu',
    name: 'Menu',
    component: () => import('@/views/Menu.vue'),
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
        component: () => import('@/views/MenuItemAddEdit.vue'),
        meta: {
          appBar: {
            title: 'Add new category',
            backRoute: { name: 'MenuCategoryList' }
          }
        }
      },
      {
        path: 'categories/:category/edit',
        name: 'MenuCategoryEdit',
        component: () => import('@/views/MenuItemAddEdit.vue'),
        meta: {
          appBar: {
            title: 'Edit category',
            backRoute: { name: 'MenuCategoryList' }
          }
        }
      },
      {
        path: 'categories/:category/items',
        name: 'MenuItemList',
        component: () => import('@/views/MenuItemList.vue'),
        meta: {
          appBar: {
            title: 'Bagels & Bread',
            backRoute: { name: 'MenuCategoryList' },
            newItem: { name: 'MenuItemAdd' }
          }
        }
      },
      {
        path: 'categories/:category/items/add',
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
        path: 'categories/:category/items/:item/edit',
        name: 'MenuItemEdit',
        component: () => import('@/views/MenuItemAddEdit.vue'),
        meta: {
          appBar: {
            title: 'Edit item',
            backRoute: {
              name: 'MenuItemList',
              params: { category: 'BagelsAndBread' }
            }
          }
        }
      }
    ]
  }
];

module.exports = tenantRoutes;
