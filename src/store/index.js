import Vue from 'vue';
import Vuex from 'vuex';
import category from './modules/category';
import cart from './modules/cart';
import home from './modules/home';
import form from './modules/form';
import shop from './modules/shop';
import auth from './modules/auth';
import menu from './modules/menu';
import tenant from './modules/tenant';
import overlay from './modules/overlay';
import VuexPersistence from 'vuex-persist';

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  modules: ['tenant'],
  key: 'localstore'
});

const vuexSession = new VuexPersistence({
  storage: window.sessionStorage,
  modules: ['auth'],
  key: 'sessionstore'
});

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [vuexLocal.plugin, vuexSession.plugin],
  modules: {
    home,
    category,
    cart,
    form,
    shop,
    auth,
    menu,
    tenant,
    overlay
  }
});
