// initial state
const state = {
  formData: {
    customerInfo: {
      name: '',
      email: '',
      phone: '',
      specialRequest: ''
    },
    customerAddress: {
      street: '',
      town: '',
      floor: '',
      apartment: '',
      parking: ''
    },
    deliveryTime: {},
    paymentMethod: ''
  },
  page: 1
};

// getters
const getters = {
  formData: state => state.formData,
  page: state => state.page,
  getName: state => state.formData.customerInfo.name,
  getEmail: state => state.formData.customerInfo.email,
  getPhone: state => state.formData.customerInfo.phone,
  getSpecialRequest: state => state.formData.customerInfo.specialRequest
};

// actions
const actions = {};

// mutations
const mutations = {
  updateName(state, payload) {
    state.formData.customerInfo.name = payload;
  },
  updateEmail(state, payload) {
    state.formData.customerInfo.email = payload;
  },
  updatePhone(state, payload) {
    state.formData.customerInfo.phone = payload;
  },
  updateSpecialRequest(state, payload) {
    state.formData.customerInfo.specialRequest = payload;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
