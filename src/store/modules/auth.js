import { httpClient } from '@/services/httpClient';

const state = {
  provider: '',
  returnURL: '',
  isSignUpStarted: false
};

const getters = {
  oauth(state) {
    return `${process.env.VUE_APP_API_URL}/authentication/provider/login?provider=${state.provider}&returnUrl=${state.returnURL}`;
  },
  isSignUpStarted(state) {
    return state.isSignUpStarted;
  }
};

const actions = {
  ping({ commit }) {
    return new Promise((resolve, reject) => {
      httpClient
        .get('authentication/ping')
        .then(response => {
          commit('updateProvider', response.data.loginProviders[0]);
          resolve(response.data);
        })
        .catch(error => {
          commit('updateProvider', '');
          reject(error);
        });
    });
  },
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      httpClient
        .post(`authentication/provider/logout?provider=${state.provider}`)
        .then(
          () => {
            commit('updateProvider', '');
            resolve('Log Out Successful');
          },
          error => {
            reject(error);
          }
        );
    });
  }
};

const mutations = {
  updateProvider(state, payload) {
    state.provider = payload;
  },
  updateReturnUrl(state, payload) {
    state.returnURL = payload;
  },
  updateIsSignUpStarted(state, payload) {
    state.isSignUpStarted = payload;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
