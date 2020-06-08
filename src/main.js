import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import './styles/tailwind.css';
import Vuelidate from 'vuelidate';
import VueMeta from 'vue-meta';
import vClickOutside from 'v-click-outside';

require('typeface-open-sans');

Vue.use(Vuelidate);
Vue.use(vClickOutside);
Vue.use(VueMeta, {
  // optional pluginOptions
  keyName: 'metaInfo',
  attribute: 'data-vue-meta',
  tagIDKeyName: 'vmid',
  refreshOnceOnNavigation: true
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
