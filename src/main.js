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
var dataLayer = dataLayer || [];
require('typeface-open-sans');


import {Plugins} from '@capacitor/core'
const {SplashScreen} = Plugins

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

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App),
  mounted() {
    if(process.env.VUE_APP_MOBILE){
      SplashScreen.hide();
    }
  }
}).$mount('#app');
