import { httpClient } from '@/services/httpClient';

// initial state
const state = {
  loading: true,
  orgData: {},
  categories: []
};

// getters
const getters = {
  getOrgData(state) {
    return state.orgData;
  },
  getCategories(state) {
    return state.categories;
  },
  getOpeningHours(state) {
    return state.orgData.custom.openingHours;
  },
  getLoading(state) {
    return state.loading;
  }
};

// actions
const actions = {
  fetchStoreData({ commit }, slug) {
    return new Promise((resolve, reject) => {
      httpClient.get(`/pages/slug/${slug}/${slug}`).then(
        response => {
          commit('loadOrgData', response.data);
          commit('loadCategories', response.data.custom.categories);
          commit('changeStoreLoading', false);
          resolve(response.data);
        },
        error => {
          commit('changeStoreLoading', false);
          reject(error);
        }
      );
    });
  }
};

// mutations
const mutations = {
  loadOrgData(state, payload) {
    state.orgData = payload;
  },
  loadCategories(state, payload) {
    state.categories = payload;
  },
  changeStoreLoading(state, payload) {
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
