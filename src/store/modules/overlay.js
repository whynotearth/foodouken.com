import Vue from 'vue';

export default {
  namespaced: true,
  state: {
    model: {
      title: '',
      message: ''
    }
  },
  mutations: {
    updateModel(state, payload) {
      Vue.set(state, 'model', payload);
    }
  },
  getters: {
    model: state => {
      return state.model;
    }
  }
};
