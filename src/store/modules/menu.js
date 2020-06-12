import { httpClient } from '@/services/httpClient';

const state = {
  items: [],
  categories: [],
  loading: false,
  item: {
    name: '',
    category: '',
    images: [],
    price: '',
    description: '',
    inventory: '',
    variants: [],
    customisations: []
  },
  category: {
    name: '',
    description: '',
    image: ''
  }
};

const getters = {
  getMenuItems: state => state.items,
  getItem: state => state.item,
  getItemName: state => state.item.name,
  getItemCategory: state => state.item.category,
  getItemImages: state => state.item.images,
  getItemPrice: state => state.item.price,
  getItemDescription: state => state.item.description,
  getItemInventory: state => state.item.inventory,
  getItemVariants: state => state.item.variants,
  getItemCustomisations: state => state.item.customisations,
  getCategories: state => state.categories,
  getCategoryList: state => state.categoryList,
  getCategory: state => state.category,
  getCategoryName: state => state.category.name,
  getCategoryDescription: state => state.category.description,
  getCategoryImage: state => state.category.image,
  getMenuLoading: state => state.loading
};

const actions = {
  fetchTenantCategories({ commit }, tenantSlug) {
    commit('changeMenuLoading', true);
    return new Promise((resolve, reject) => {
      httpClient.get(`/shop/tenant/${tenantSlug}/categories`).then(
        response => {
          commit('updateCategories', response.data);
          commit('changeMenuLoading', false);
          resolve(response.data);
        },
        error => {
          commit('changeMenuLoading', false);
          reject(error);
        }
      );
    });
  },
  fetchTenantCategoryById({ commit }, { tenantSlug, categoryId }) {
    commit('changeMenuLoading', true);
    return new Promise((resolve, reject) => {
      httpClient
        .get(`/shop/tenant/${tenantSlug}/categories/${categoryId}`)
        .then(
          response => {
            commit('updateCategory', response.data);
            commit('changeMenuLoading', false);
            resolve(response.data);
          },
          error => {
            commit('changeMenuLoading', false);
            reject(error);
          }
        );
    });
  },
  fetchTenantCategoryItems({ commit }, categoryId) {
    commit('changeMenuLoading', true);
    return new Promise((resolve, reject) => {
      httpClient.get(`/shop/categories/${categoryId}/products`).then(
        response => {
          commit('updateItems', response.data);
          commit('changeMenuLoading', false);
          resolve(response.data);
        },
        error => {
          commit('changeMenuLoading', false);
          reject(error);
        }
      );
    });
  }
};

const mutations = {
  updateItems(state, payload) {
    state.items = payload;
  },
  updateItem(state, payload) {
    state.item = payload;
  },
  updateItemName(state, payload) {
    state.item.name = payload;
  },
  updateItemCategory(state, payload) {
    state.item.category = payload;
  },
  updateItemPrice(state, payload) {
    state.item.price = payload;
  },
  updateItemDescription(state, payload) {
    state.item.description = payload;
  },
  updateItemInventory(state, payload) {
    state.item.inventory = payload;
  },
  updateItemImages(state, payload) {
    state.item.images = payload;
  },
  updateItemVariants(state, payload) {
    state.item.variants = payload;
  },
  updateItemCustomisations(state, payload) {
    state.item.customisations = payload;
  },
  updateCategories(state, payload) {
    state.categories = payload;
  },
  updateCategory(state, payload) {
    state.category = payload;
  },
  updateCategoryName(state, payload) {
    state.category.name = payload;
  },
  updateCategoryDescription(state, payload) {
    state.category.description = payload;
  },
  updateCategoryImage(state, payload) {
    state.category.image = payload;
  },
  changeMenuLoading(state, payload) {
    state.loading = payload;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
