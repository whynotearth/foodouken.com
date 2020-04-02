import Vue from 'vue';
import Vuex from 'vuex';
import categories from './modules/categories';
import products from './modules/products';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    categories,
    products
  }
});
