import { httpClient } from '@/services/httpClient';

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
      addressOption: 'Use my location',
      googleLocation: '',
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
      time: '',
      totalTime: ''
    },
    paymentMethod: 'Cash'
  },
  page: 1,
  form: false,
  loading: false
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
  getGoogleLocation: state => state.formData.customerAddress.googleLocation,
  getBuildingName: state => state.formData.customerAddress.buildingName,
  getStreet: state => state.formData.customerAddress.street,
  getTown: state => state.formData.customerAddress.town,
  getFloor: state => state.formData.customerAddress.floor,
  getApartment: state => state.formData.customerAddress.apartment,
  getParking: state => state.formData.customerAddress.parking,
  getAddressOption: state => state.formData.customerAddress.addressOption,
  getDeliveryDateOption: state => state.formData.deliveryDate.option,
  getDeliveryDateDay: state => state.formData.deliveryDate.day,
  getDeliveryDateTime: state => state.formData.deliveryDate.time,
  getPaymentMethod: state => state.formData.paymentMethod,
  getTotalTime: state => state.formData.deliveryDate.totalTime
};

// actions
const actions = {
  register({ commit, getters }) {
    commit('changeFormsLoading', true);
    let address;
    if (getters.getAddressOption === 'Use my location') {
      address = getters.getGoogleLocation;
    } else {
      address = `Apartment: ${getters.getApartment}, Floor: ${getters.getFloor}, Building: ${getters.getBuildingName}, Street: ${getters.getStreet}, Town: ${getters.getTown}, Parking: ${getters.getParking}`;
    }
    const userData = {
      name: getters.getName,
      email: getters.getEmail,
      phoneNumber: getters.getPhone,
      address: address
    };
    return new Promise((resolve, reject) => {
      httpClient.post('/authentication/register', userData).then(
        response => {
          commit('changeFormsLoading', false);
          commit('setToken', response.data);
          resolve(response.data);
        },
        error => {
          commit('changeFormsLoading', false);
          reject(error);
        }
      );
    });
  },
  ping({ commit }) {
    commit('changeFormsLoading', true);
    return new Promise((resolve, reject) => {
      httpClient.get('/authentication/ping').then(
        response => {
          commit('changeFormsLoading', false);
          resolve(response.data);
        },
        error => {
          commit('changeFormsLoading', false);
          reject(error);
        }
      );
    });
  },
  submit({ commit, rootState }, payload) {
    commit('changeFormsLoading', true);
    const shopSlug = rootState.shop.shopSlug;
    return new Promise((resolve, reject) => {
      httpClient.post(`/tenants/${shopSlug}/reservations`, payload).then(
        response => {
          commit('changeFormsLoading', false);
          resolve(response.data);
        },
        error => {
          commit('changeFormsLoading', false);
          reject(error);
        }
      );
    });
  }
};

// mutations
const mutations = {
  triggerForm(state, payload) {
    state.form = payload;
  },
  pageChange(state, payload) {
    state.page = payload;
  },
  changeFormsLoading(state, payload) {
    state.loading = payload;
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
  updateGoogleLocation(state, payload) {
    state.formData.customerAddress.googleLocation = payload;
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
  updateAddressOption(state, payload) {
    state.formData.customerAddress.addressOption = payload;
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
  },
  updateTotalTime(state, payload) {
    state.formData.deliveryDate.totalTime = payload;
  },
  setToken(state, payload) {
    httpClient.defaults.headers.common['authorisation'] = 'Bearer ' + payload;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
