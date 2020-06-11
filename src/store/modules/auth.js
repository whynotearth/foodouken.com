import { httpClient } from '@/services/httpClient';

const defaultUser = {
  id: 0,
  isAuthenticated: false,
  userName: ''
};

const state = {
  user: defaultUser,
  provider: '',
  returnURL: '',
  loading: false,
  loginError: '',
  registerError: '',
  token: '',
  isSignUpStarted: false,
};

const getters = {
  getToken(state) {
    return state.token;
  },
  getUser(state) {
    return state.user;
  },
  isAuthenticated(state) {
    return state.user.isAuthenticated;
  },
  loginError(state) {
    return state.loginError;
  },
  registerError(state) {
    return state.registerError;
  },
  oauth(state) {
    return `${process.env.VUE_APP_API_URL}/authentication/provider/login?provider=${state.provider}&returnUrl=${state.returnURL}`;
  },
  isSignUpStarted(state) {
    return state.isSignUpStarted;
  },
};

const actions = {
  updateLoginError(context, payload) {
    context.commit('updateLoginError', payload);
  },
  updateReturnUrl(context, payload) {
    context.commit('updateReturnUrl', payload);
  },
  updateToken(context, payload) {
    context.commit('updateToken', payload);
  },
  updateUser(context, payload) {
    context.commit('updateUser', payload);
  },
  ping(context) {
    return new Promise((resolve, reject) => {
      httpClient.get('authentication/ping').then(
        response => {
          context.dispatch('updateUser', response.data);
          resolve(response.data);
        },
        error => {
          context.dispatch('updateUser', defaultUser);
          reject(error);
        }
      );
    });
  },
  logout(context, payload) {
    return new Promise((resolve, reject) => {
      httpClient.get(`authentication/provider/logout?provider=${payload.provider}`).then(
        () => {
          context.dispatch('updateUser', defaultUser);
        },
        error => {
          reject(error);
        }
      );
    });
  }
};

const mutations = {
  updateLoginError(state, payload) {
    state.loginError = payload;
  },
  updateRegisterError(state, payload) {
    state.registerError = payload;
  },
  updateProvider(state, payload) {
    state.provider = payload;
  },
  updateLoading(state, payload) {
    state.loading = payload;
  },
  updateUser(state, payload) {
    state.user = payload;
  },
  updateToken(state, payload) {
    state.token = payload;
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
