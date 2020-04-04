import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import './assets/tailwind.css';

Vue.config.productionTip = false;

Vue.filter('dashToSpace', function(value) {
  if (!value) return '';
  return value.toString().replace(/-/g, ' ');
});

Vue.filter('capitalize', function(value) {
  if (!value) return '';
  return value
    .toString()
    .split(' ')
    .map((w, i) => {
      if (i === 0 || w !== 'and') {
        return w.charAt(0).toUpperCase() + w.slice(1);
      } else {
        return w;
      }
    })
    .join(' ');
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
