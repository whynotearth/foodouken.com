import Vue from 'vue';
import Vuex from 'vuex';
import category from './modules/category';
import cart from './modules/cart';
import home from './modules/home';
import auth from './modules/auth';
import form from './modules/form';
import shop from './modules/shop';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    home,
    category,
    cart,
    form,
    shop
  }
});
