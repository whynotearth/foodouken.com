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
      buildingName: '',
      street: '',
      town: '',
      floor: '',
      apartment: '',
      parking: ''
    },
    deliveryDate: {
      option: 'Now',
      day: '',
      time: ''
    },
    paymentMethod: 'Cash'
  },
  page: 1,
  form: false
};

// getters
const getters = {
  formData: state => state.formData,
  page: state => state.page,
  getFormActive: state => state.form,
  getName: state => state.formData.customerInfo.name,
  getEmail: state => state.formData.customerInfo.email,
  getPhone: state => state.formData.customerInfo.phone,
  getSpecialRequest: state => state.formData.customerInfo.specialRequest,
  getBuildingName: state => state.formData.customerAddress.buildingName,
  getStreet: state => state.formData.customerAddress.street,
  getTown: state => state.formData.customerAddress.town,
  getFloor: state => state.formData.customerAddress.floor,
  getApartment: state => state.formData.customerAddress.apartment,
  getParking: state => state.formData.customerAddress.parking,
  getDeliveryDateOption: state => state.formData.deliveryDate.option,
  getDeliveryDateDay: state => state.formData.deliveryDate.day,
  getDeliveryDateTime: state => state.formData.deliveryDate.time,
  getPaymentMethod: state => state.formData.paymentMethod
};

// actions
const actions = {};

// mutations
const mutations = {
  triggerForm(state, payload) {
    state.form = payload;
  },
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
  updateBuildingName(state, payload) {
    state.formData.customerAddress.buildingName = payload;
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
  },
  updateDeliveryDateOption(state, payload) {
    state.formData.deliveryDate.option = payload;
  },
  updateDeliveryDateDay(state, payload) {
    state.formData.deliveryDate.day = payload;
  },
  updateDeliveryDateTime(state, payload) {
    state.formData.deliveryDate.time = payload;
  },
  updatePaymentMethod(state, payload) {
    state.formData.paymentMethod = payload;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
