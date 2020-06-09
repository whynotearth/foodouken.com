import { AuthenticationService } from '@/connection/resources.js';

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
  token: ''
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
  }
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
  async ping(context) {
    // const token = context.getters.getToken;

    try {
      const params = {};
      const options = {
        // headers: { Authorization: `Bearer ${token}` }
      };
      const user = await AuthenticationService.ping(params, options);
      await context.dispatch('updateUser', user);
    } catch (error) {
      console.log('ping 401');
      throw new Error('Getting user data failed');
    }
    return true;
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
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
