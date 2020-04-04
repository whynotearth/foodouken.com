import { httpClient } from '@/services/httpClient';

// initial state
const state = {
  loading: false,
  category: {},
  products: [],
  selectedCategorySlug: ''
};

// getters
const getters = {
  getCategory(state) {
    return state.category;
  },
  getProducts(state) {
    return state.products;
  },
  getSelectedCategorySlug(state) {
    return state.selectedCategorySlug;
  },
  getCategoryLoading(state) {
    return state.loading;
  }
};

// actions
const actions = {
  fetchCategory({ commit }, slug) {
    commit('updateSelectedCategorySlug', slug);
    commit('changeCategoryLoading', true);
    let org = process.env.VUE_APP_ORG_NAME;
    return new Promise((resolve, reject) => {
      httpClient.get(`/pages/slug/${org}/${slug}`).then(
        response => {
          commit('updateCategory', response.data);
          commit('updateProducts', response.data.custom.products);
          commit('changeCategoryLoading', false);
          resolve(response.data);
        },
        error => {
          commit('changeCategoryLoading', false);
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
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
