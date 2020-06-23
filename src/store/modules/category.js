import { httpClient } from '@/services/httpClient';

// initial state
const state = {
  loading: false,
  categories: [],
  category: {},
  products: [],
  selectedCategorySlug: ''
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
  }
};

// actions
const actions = {
  fetchCategoryProducts({ commit, rootState }, category) {
    const shopSlug = rootState.shop.shopSlug;
    const slug = category.slug;
    commit('updateCategory', category);
    commit('updateSelectedCategorySlug', slug);
    commit('changeCategoryLoading', true);
    return new Promise((resolve, reject) => {
      httpClient.get(`/tenants/${shopSlug}/categories/${slug}/products`).then(
        response => {
          commit(
            'updateProducts',
            response.data.map(prod => {
              return {
                ...prod,
                variations: [
                  {
                    name: 'Hot',
                    price: 0
                  },
                  {
                    name: 'Cold',
                    price: 0.25
                  }
                ],
                productAttributes: [
                  {
                    name: 'Sugar',
                    price: 0.25
                  },
                  {
                    name: 'Lemon',
                    price: 0.25
                  }
                ]
              };
            })
          );
          commit('changeCategoryLoading', false);
          resolve(response.data);
        },
        error => {
          commit('changeCategoryLoading', false);
          reject(error);
        }
      );
    });
  },
  fetchCategories({ commit, rootState }) {
    const shopSlug = rootState.shop.shopSlug;
    commit('changeCategoryLoading', true);
    return new Promise((resolve, reject) => {
      httpClient.get(`/tenants/${shopSlug}/categories`).then(
        response => {
          commit('loadCategories', response.data);
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
  },
  loadCategories(state, payload) {
    state.categories = payload;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
