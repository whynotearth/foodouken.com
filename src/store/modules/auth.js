// initial state
const state = {
    businessInfo: {
      name: '',
      email: '',
      phone: '',
      description: '',
    },
    notificationType: [],
    paymentMethodType: [],
    businessHouts: [
      {
        dayOfWeek: 0,
        isClosed: true,
        openingTime: {},
        closingTime: {}
      }
    ],
    page: 1
};

const getters = {
  getName(state) {
    return state.businessInfo.name;
  },
  getEmail(state) {
    return state.businessInfo.email;
  },
  getPhone(state) {
    return state.businessInfo.phone;
  },
  getDescription(state) {
    return state.businessInfo.description;
  },
  page(state) {
    return state.page;
  }
};

const actions = {
};

const mutations = {
  updateName(state, payload) {
    state.businessInfo.name = payload;
  },
  updateEmail(state, payload) {
    state.businessInfo.email = payload;
  },
  updatePhone(state, payload) {
    state.businessInfo.phone = payload;
  },
  updateDescription(state, payload) {
    state.businessInfo.description = payload;
  },
  pageChange(state, payload) {
    state.page = payload
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
