import { httpClient } from '@/services/httpClient';

const state = {
  menuItems: [],
  categories: [],
  loading: false
};

const getters = {
  getMenuItems: state => state.items,
  getCategories: state => state.categories,
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
