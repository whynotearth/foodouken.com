import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import './styles/tailwind.css';
import Vuelidate from 'vuelidate';
import VueMeta from 'vue-meta';
import SmoothPicker from 'vue-smooth-picker';
import 'vue-smooth-picker/dist/css/style.css';
import vClickOutside from 'v-click-outside';
import * as VueGoogleMaps from 'vue2-google-maps';
import Rollbar from 'rollbar';

var dataLayer = dataLayer || [];
require('typeface-open-sans');

Vue.use(SmoothPicker);
Vue.use(Vuelidate);
Vue.use(vClickOutside);
Vue.use(VueMeta, {
  // optional pluginOptions
  keyName: 'metaInfo',
  attribute: 'data-vue-meta',
  tagIDKeyName: 'vmid',
  refreshOnceOnNavigation: true
});
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBCDf7x5JXtJhrxw5UwiXIOA_aEfnZ6Ms4',
    libraries: 'places'
  },
  installComponents: true
});

Vue.config.productionTip = false;

Vue.prototype.$rollbar = new Rollbar({
  accessToken: '04f340e4322f438aa41f544423db8dc2',
  captureUncaught: true,
  captureUnhandledRejections: true,
  payload: {
    environment: process.env.NODE_ENV == "development" ? "staging" : "production"
  }
});

Vue.config.errorHandler = (err, vm) => {
  vm.$rollbar.error(err);
  throw err;
};


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
