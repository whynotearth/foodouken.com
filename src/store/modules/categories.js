import categories from '../../api/categories';

// initial state
const state = {
  all: []
};

// getters
const getters = {};

// actions
const actions = {
  // getAllCategories ({ commit }) {
  getAllCategories() {
    categories.getCategories();
  },
  // getCategory ({ commit }, category) {
  getCategory(category) {
    categories.getCategory(category);
  }
};

// mutations
const mutations = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
