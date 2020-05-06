import { httpClient } from '@/services/httpClient';

// initial state
const state = {
  loading: true,
  accessToken: '',
  user: {}
};

const getters = {
  getAccessToken(state) {
    return state.accessToken;
  },
  getUser(state) {
    return state.user;
  },
  getLoading(state) {
    return state.loading;
  }
};

// mutations
const mutations = {
  updateAccessToken(state, payload) {
    return (state.home = payload);
  },
  updateUser(state, payload) {
    return (state.tenants = payload);
  },
  updateLoading(state, payload) {
    return (state.loading = payload);
  }
};

// actions
const actions = {
  register({ context }) {
    context.commit('updateLoading', true);

    const userData = {
      name: getters.getName,
      email: getters.getEmail,
      phoneNumber: getters.getPhone
    };

    return new Promise((resolve, reject) => {
      httpClient.post(`/api/v0/authentication/register`, userData).then(
        async response => {
          context.commit('updateLoading', false);
          resolve(response, true);
        },
        error => {
          context.commit('updateLoading', false);
          reject(error, false);
        }
      );
    });
  },
  logout({ context }) {
    context.commit('updateLoading', true);
    return new Promise((resolve, reject) => {
      httpClient.post(`/api/v0/authentication/provider/logout`).then(
        async () => {
          context.commit('updateLoading', false);
          resolve(true);
        },
        error => {
          context.commit('updateLoading', false);
          reject(error, false);
        }
      );
    });
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
