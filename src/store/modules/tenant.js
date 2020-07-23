import { httpClient } from '@/services/httpClient';

const notificationTypes = [
  // {
  //   name: 'Text',
  //   key: 'phone',
  //   id: 'text'
  // },
  // {
  //   name: 'Whatsapp',
  //   key: 'phone',
  //   id: 'whatsapp'
  // },
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
  }
  // {
  //   name: 'ABA Bank Transfer',
  //   id: 'abaBankTransfer'
  // }
];

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

const defaultNotificationTypes = ['email'];
const defaultPaymentMethods = ['cash'];
const defaultBusinessHours = days.map(day => {
  return {
    dayOfWeek: day.toLocaleLowerCase(),
    isClosed: false,
    openingTime: '08:00:00',
    closingTime: '18:00:00'
  };
});

const state = {
  businessInfo: {
    name: '',
    email: '',
    phone: '',
    description: '',
    logoUrl: ''
  },
  selectedNotificationType: [...defaultNotificationTypes],
  selectedPaymentMethods: [...defaultPaymentMethods],
  businessHours: [...defaultBusinessHours],
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
  getLogo(state) {
    return state.businessInfo.logoUrl;
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
  createTenant({ getters }) {
    const registerData = {
      name: getters.getName,
      email: getters.getEmail,
      phone: getters.getPhone,
      description: getters.getDescription,
      notificationTypes: getters.getSelectedNotificationTypes,
      paymentMethodTypes: getters.getSelectedPaymentMethods,
      companySlug: process.env.VUE_APP_COMPANY_SLUG,
      businessHours: getters.getBusinessHours,
      logoUrl: getters.getLogo
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
  },
  fetchUserTenants() {
    const companySlug = process.env.VUE_APP_COMPANY_SLUG;
    return new Promise((resolve, reject) => {
      httpClient.get(`/companies/${companySlug}/tenants/mytenants`).then(
        response => {
          resolve(response.data);
        },
        error => {
          reject(error);
        }
      );
    });
  },
  userOwnsTenant(context, tenantSlug) {
    let companySlug = process.env.VUE_APP_COMPANY_SLUG;
    return new Promise((resolve, reject) => {
      httpClient
        .get(`/companies/${companySlug}/tenants/owns/${tenantSlug}`)
        .then(
          response => {
            resolve(response.data);
          },
          error => {
            reject(error);
          }
        );
    });
  },
  changeActiveStatus(context, payload) {
    let companySlug = process.env.VUE_APP_COMPANY_SLUG;
    return new Promise((resolve, reject) => {
      httpClient
        .post(`/companies/${companySlug}/tenants/${payload.slug}/active`, {
          isActive: payload.isActive
        })
        .then(
          response => {
            resolve(response.data);
          },
          error => {
            reject(error);
          }
        );
    });
  },
  fetchTenantDetails(conext, payload) {
    const companySlug = process.env.VUE_APP_COMPANY_SLUG;
    return new Promise((resolve, reject) => {
      httpClient
        .get(`/companies/${companySlug}/tenants/${payload.slug}`)
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  changePromotionStatus(context, payload) {
    const companySlug = process.env.VUE_APP_COMPANY_SLUG;
    return new Promise((resolve, reject) => {
      httpClient
        .patch(`/companies/${companySlug}/tenants/${payload.slug}`, {
          hasPromotion: payload.hasPromotion,
          promotionPercent: payload.promotionPercent
        })
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
  updateLogo(state, payload) {
    state.businessInfo.logoUrl = payload;
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
  },
  updateIsActive(state, payload) {
    state.isActive = payload;
  },
  resetCreateTenantForm(state) {
    state.businessInfo.name = '';
    state.businessInfo.email = '';
    state.businessInfo.phone = '';
    state.businessInfo.description = '';
    state.businessInfo.logoUrl = '';
    state.selectedNotificationType = defaultNotificationTypes;
    state.paymentMethodTypes = defaultPaymentMethods;
    state.businessHours = defaultBusinessHours;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
