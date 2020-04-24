import { httpClient } from '@/services/httpClient';

// initial state
const state = {
  loading: true,
  home: {
    custom: {}
  },
  tenants: []
};

// getters
const getters = {
  getHomeData(state) {
    return state.home;
  },
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
    commit('changeHomeLoading', true);
    return new Promise((resolve, reject) => {
      httpClient
        .get(`/pages/slug/foodouken/foodouken-cambodia-food-delivery`)
        .then(
          response => {
            commit('loadHomeData', response.data);
            commit('changeHomeLoading', false);
            resolve(response.data);
          },
          error => {
            commit('changeHomeLoading', false);
            reject(error);
          }
        );
    });
  },
  fetchTenants({ commit }) {
    commit('changeHomeLoading', true);
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
  loadHomeData(state, payload) {
    state.home = payload;
  },
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
