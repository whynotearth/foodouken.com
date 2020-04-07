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
  getSpecialRequest: state => state.formData.customerInfo.specialRequest,
  getStreet: state => state.formData.customerAddress.street,
  getTown: state => state.formData.customerAddress.town,
  getFloor: state => state.formData.customerAddress.floor,
  getApartment: state => state.formData.customerAddress.apartment,
  getParking: state => state.formData.customerAddress.parking
};

// actions
const actions = {};

// mutations
const mutations = {
  pageChange(state, payload) {
    state.page = payload;
  },
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
  },
  updateStreet(state, payload) {
    state.formData.customerAddress.street = payload;
  },
  updateTown(state, payload) {
    state.formData.customerAddress.town = payload;
  },
  updateFloor(state, payload) {
    state.formData.customerAddress.floor = payload;
  },
  updateApartment(state, payload) {
    state.formData.customerAddress.apartment = payload;
  },
  updateParking(state, payload) {
    state.formData.customerAddress.parking = payload;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
