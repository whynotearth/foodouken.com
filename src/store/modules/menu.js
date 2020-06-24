import { httpClient } from '@/services/httpClient';

const state = {
  menuItems: [],
  categories: [],
  loading: false,
  menuItem: null
};

const getters = {
  getMenuItems: state => state.menuItems,
  getCategories: state => state.categories,
  getMenuLoading: state => state.loading,
  getMenuItem: state => state.menuItem
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
  createTenantCategory({ commit }, { tenantSlug, category }) {
    commit('changeMenuLoading', true);
    return new Promise((resolve, reject) => {
      httpClient.post(`/shop/tenant/${tenantSlug}/categories`, category).then(
        response => {
          commit('changeMenuLoading', false);
          resolve(response);
        },
        error => {
          commit('changeMenuLoading', false);
          reject(error);
        }
      );
    });
  },
  updateTenantCategory({ commit }, { tenantSlug, categoryId, category }) {
    commit('changeMenuLoading', true);
    return new Promise((resolve, reject) => {
      httpClient
        .put(`/shop/tenant/${tenantSlug}/categories/${categoryId}`, category)
        .then(
          response => {
            commit('changeMenuLoading', false);
            resolve(response);
          },
          error => {
            commit('changeMenuLoading', false);
            reject(error);
          }
        );
    });
  },
  deleteTenantCategory({ commit }, { tenantSlug, categoryId }) {
    commit('changeMenuLoading', true);
    return new Promise((resolve, reject) => {
      httpClient
        .delete(`/shop/tenant/${tenantSlug}/categories/${categoryId}`)
        .then(
          response => {
            commit('changeMenuLoading', false);
            resolve(response);
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
          commit('updateMenuItems', response.data);
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
  fetchTenantCategoryItemById({ commit }, { categoryId, productId }) {
    commit('changeMenuLoading', true);
    return new Promise((resolve, reject) => {
      httpClient
        .get(`/shop/categories/${categoryId}/products/${productId}`)
        .then(
          response => {
            commit('changeMenuLoading', false);
            commit('updateMenuItem', response.data);
            resolve(response.data);
          },
          error => {
            commit('changeMenuLoading', false);
            reject(error);
          }
        );
    });
  },
  createTenantCategoryItem({ commit }, { categoryId, product }) {
    commit('changeMenuLoading', true);
    return new Promise((resolve, reject) => {
      httpClient.post(`/shop/categories/${categoryId}/products`, product).then(
        response => {
          commit('changeMenuLoading', false);
          resolve(response);
        },
        error => {
          commit('changeMenuLoading', false);
          reject(error);
        }
      );
    });
  },
  updateTenantCategoryItem({ commit }, { categoryId, productId, product }) {
    commit('changeMenuLoading', true);
    return new Promise((resolve, reject) => {
      httpClient
        .put(`/shop/categories/${categoryId}/products/${productId}`, product)
        .then(
          response => {
            commit('changeMenuLoading', false);
            resolve(response);
          },
          error => {
            commit('changeMenuLoading', false);
            reject(error);
          }
        );
    });
  },
  deleteTenantCategoryItem({ commit }, { categoryId, productId }) {
    commit('changeMenuLoading', true);
    return new Promise((resolve, reject) => {
      httpClient
        .delete(`/shop/categories/${categoryId}/products/${productId}`)
        .then(
          response => {
            commit('changeMenuLoading', false);
            resolve(response);
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
  updateMenuItems(state, payload) {
    state.menuItems = payload;
  },
  updateCategories(state, payload) {
    state.categories = payload;
  },
  changeMenuLoading(state, payload) {
    state.loading = payload;
  },
  updateMenuItem(state, payload) {
    state.menuItem = payload;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
