import { httpClient } from '../../services/httpClient';

// initial state
const state = {
  categories: [],
  selectedCategory: {},
  selectedProducts: []
};

// getters
const getters = {
  foodCategories(state) {
    let foodCategories = state.categories.filter(c => c.id > 15 && c.id <= 22);
    return foodCategories;
  }
};

// actions
const actions = {
  getAllCategories({ commit }) {
    return httpClient.get('/categories').then(response => {
      commit('updateCategories', response.data);
    });
  },
  getCategoryBySlug({ commit }, slug) {
    return httpClient.get('/pages/slug/foodouken/' + slug).then(response => {
      commit('updateSelectedCategory', response.data);
    });
  }
};

// mutations
const mutations = {
  updateCategories(state, categories) {
    state.categories = categories;
  },
  updateSelectedCategory(state, category) {
    state.selectedCategory = category;
    state.selectedProducts = category.custom.products;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
