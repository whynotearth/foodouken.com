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
  fetchHomeData({ commit }) {
    return new Promise((resolve, reject) => {
      httpClient.get(`/companies/foodouken/tenants`).then(
        response => {
          commit('loadTenants', response.data);
          commit('changeHomeLoading', false);
          resolve(response.data);
        },
        error => {
          commit('changeHomeLoading', false);
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
  changeHomeLoading(state, payload) {
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
