import { httpClient } from '@/services/httpClient';

// initial state
const state = {
  loading: true,
  tenants: []
};

// getters
const getters = {
  getTenants(state) {
    return state.tenants;
  },
  getLoading(state) {
    return state.loading;
  }
};

// actions
const actions = {
  fetchWelcomeData({ commit }) {
    return new Promise((resolve, reject) => {
      httpClient.get(`/companies/foodouken/tenants`).then(
        response => {
          commit('loadTenants', response.data);
          commit('changeWelcomeLoading', false);
          resolve(response.data);
        },
        error => {
          commit('changeWelcomeLoading', false);
          reject(error);
        }
      );
    });
  }
};

// mutations
const mutations = {
  loadTenants(state, payload) {
    state.tenants = payload;
  },
  changeWelcomeLoading(state, payload) {
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
