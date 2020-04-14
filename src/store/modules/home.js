import { httpClient } from '@/services/httpClient';

// initial state
const state = {
  loading: false,
  orgData: {},
  categories: [],
  bannerData: null,
  siteBanner: false
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
  },
  getBannerData(state) {
    return state.bannerData;
  },
  getBannerInfo() {
    return state.siteBanner;
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
  },
  fetchSiteBannerData({ commit }) {
    let org = process.env.VUE_APP_ORG_NAME;
    return new Promise((resolve, reject) => {
      httpClient.get(`/pages/slug/${org}/${org}`).then(
        response => {
          commit('loadSiteBannerData', response.data.custom.siteBanner);
        },
        error => {
          reject(error);
        }
      );
    });
  },
  changeSiteBannerVisibility({ commit }, val) {
    commit('siteBannerVisibility', val);
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
  },
  loadSiteBannerData(state, payload) {
    state.bannerData = payload;
  },
  siteBannerVisibility(state, payload) {
    state.siteBanner = payload;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
