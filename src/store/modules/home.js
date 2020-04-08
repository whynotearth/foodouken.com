import { httpClient } from '@/services/httpClient';

// initial state
const state = {
  loading: false,
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
  }
};

// actions
const actions = {
  fetchHomeData({ commit }) {
    commit('changeHomeLoading', true);
    let org = process.env.VUE_APP_ORG_NAME;
    return new Promise((resolve, reject) => {
      httpClient.get(`/pages/slug/${org}/${org}`).then(
        response => {
          commit('loadOrgData', response.data);
          commit('loadCategories', response.data.custom.categories);
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
  loadOrgData(state, payload) {
    state.orgData = payload;
  },
  loadCategories(state, payload) {
    state.categories = payload;
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
