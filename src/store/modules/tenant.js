import { httpClient } from '@/services/httpClient';

const notificationTypes = [
  {
    name: 'Text',
    key: 'phone',
    id: 'text'
  },
  {
    name: 'Whatsapp',
    key: 'phone',
    id: 'whatsapp'
  },
  {
    name: 'Email',
    key: 'email',
    id: 'email'
  }
];

const paymentMethods = [
  {
    name: 'Cash',
    id: 'cash'
  },
  {
    name: 'ABA Bank Transfer',
    id: 'abaBankTransfer'
  }
];

const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
];

const state = {
  businessInfo: {
    name: '',
    email: '',
    phone: '',
    description: ''
  },
  selectedNotificationType: [],
  selectedPaymentMethods: [],
  businessHours: days.map(day => {
    return {
      dayOfWeek: day.toLocaleLowerCase(),
      isClosed: false,
      openingTime: '08:00:00',
      closingTime: '18:00:00'
    };
  }),
  page: 1,
  notificationTypes,
  paymentMethods
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
  },
  getSelectedNotificationTypes(state) {
    return state.selectedNotificationType;
  },
  getSelectedPaymentMethods(state) {
    return state.selectedPaymentMethods;
  },
  getBusinessHours(state) {
    return state.businessHours;
  }
};

const actions = {
  createTenant({ getters, state }) {
    const registerData = {
      name: getters.getName,
      email: getters.getEmail,
      phone: getters.getPhone,
      description: getters.getDescription,
      notificationTypes: getters.getSelectedNotificationTypes,
      paymentMethodTypes: getters.getSelectedPaymentMethods,
      companySlug: process.env.VUE_APP_COMPANY_SLUG,
      businessHours: state.businessHours
    };

    return new Promise((resolve, reject) => {
      httpClient
        .post(`/companies/${registerData.companySlug}/tenants`, registerData)
        .then(
          response => {
            resolve(response.data);
          },
          error => {
            reject(error);
          }
        );
    });
  }
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
    state.page = payload;
  },
  updateSelectedNotificationTypes(state, payload) {
    state.selectedNotificationType = [...payload];
  },
  updateSelectedPaymentMethods(state, payload) {
    state.selectedPaymentMethods = [...payload];
  },
  updateBusinessHours(state, payload) {
    state.businessHours = payload;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
