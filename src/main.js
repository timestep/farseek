// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import createPersistedState from 'vuex-persistedstate';

import App from './App';
import router from './router';
import modules from './store/index';

Vue.use(Vuex);
Vue.config.productionTip = false;

const localStorageOptions = {
  key: 'farseek',
  paths: [
    'library',
  ],
};

const plugins = [
  createLogger(),
  createPersistedState(localStorageOptions),
];

const store = new Vuex.Store({
  modules,
  plugins,
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App },
});
