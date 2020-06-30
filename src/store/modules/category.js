import { httpClient } from '@/services/httpClient';

// initial state
const state = {
  loading: false,
  categories: [],
  category: {},
  products: [],
  selectedCategoryId: null
};

// getters
const getters = {
  getCategory(state) {
    return state.category;
  },
  getCategories(state) {
    return state.categories;
  },
  getProducts(state) {
    return state.products;
  },
  getSelectedCategorySlug(state) {
    return state.selectedCategorySlug;
  },
  getCategoryLoading(state) {
    return state.loading;
  },
  getSelectedCategory: state =>
    state.categories.find(category => category.id === state.selectedCategoryId)
};

// actions
const actions = {
  fetchCategoryProducts({ commit }, categoryId) {
    return new Promise((resolve, reject) => {
      httpClient.get(`/shop/categories/${categoryId}/products`).then(
        response => {
          commit('updateProducts', response.data);
          commit('updateSelectedCategoryId', categoryId);
          resolve(response.data);
        },
        error => {
          reject(error);
        }
      );
    });
  },
  fetchCategories({ commit }, tenantSlug) {
    return new Promise((resolve, reject) => {
      httpClient.get(`/shop/tenant/${tenantSlug}/categories`).then(
        response => {
          commit('updateCategories', response.data);
          resolve(response.data);
        },
        error => {
          reject(error);
        }
      );
    });
  }
};

// mutations
const mutations = {
  changeCategoryLoading(state, payload) {
    state.loading = payload;
  },
  updateSelectedCategorySlug(state, payload) {
    state.selectedCategorySlug = payload;
  },
  updateCategory(state, payload) {
    state.category = payload;
  },
  updateProducts(state, payload) {
    state.products = payload;
  },
  updateCategories(state, payload) {
    state.categories = payload;
  },
  updateSelectedCategoryId(state, payload) {
    state.selectedCategoryId = payload;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
