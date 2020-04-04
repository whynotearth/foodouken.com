import { httpClient } from '../../services/httpClient';

// initial state
const state = {
  selectedCategorySlug: 'for-you',
  pages: []
};

// getters
const getters = {
  foodCategories(state) {
    let foodCategories = state.pages.filter(
      c =>
        c.categories[0].name === c.slug && c.brand === 'bang-bang-bakery-cafe'
    );
    return foodCategories;
  },
  selectedCategory(state) {
    return state.pages.filter(c => c.slug === state.selectedCategorySlug)[0];
  },
  selectedProducts(state) {
    console.log(state);
    return state.pages
      .filter(
        c =>
          c.categories[0].name === c.slug &&
          c.slug === state.selectedCategorySlug
      )
      .map(c => c.custom.products)[0];
  }
};

// actions
const actions = {
  loadPageData({ commit }) {
    return httpClient.get('/').then(response => {
      commit('updatePageData', response.data);
    });
  },
  updateSelectedCategory({ commit }, slug) {
    commit('updateSelectedCategorySlug', slug);
  }
};

// mutations
const mutations = {
  updatePageData(state, pages) {
    state.pages = pages;
  },
  updateSelectedCategorySlug(state, slug) {
    state.selectedCategorySlug = slug;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
