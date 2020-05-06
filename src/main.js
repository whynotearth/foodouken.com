import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import './assets/tailwind.css';
import Vuelidate from 'vuelidate';
import VueMeta from 'vue-meta';
import FBSignInButton from 'vue-facebook-signin-button';
import GSignInButton from 'vue-google-signin-button';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

require('typeface-open-sans');
library.add(faUserSecret);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(GSignInButton);
Vue.use(FBSignInButton);
Vue.use(Vuelidate);
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
