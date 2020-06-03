import Vue from 'vue';
import Vuex from 'vuex';
import category from './modules/category';
import cart from './modules/cart';
import home from './modules/home';
import form from './modules/form';
import shop from './modules/shop';
import auth from './modules/auth';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    home,
    category,
    cart,
    form,
    shop,
    auth
  }
});
