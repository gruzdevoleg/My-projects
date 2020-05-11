import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import store from './store/store';
import { routes } from './routes.js';
import { BootstrapVue } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
//import './custom.less';
import './custom.scss';
import { createPopper } from '@popperjs/core';
// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
//Vue.use(IconsPlugin);

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.http.options.root = 'https://stock-trader-7e83c.firebaseio.com/';
Vue.filter('currency', value => '$' + value.toLocaleString())
import Header from './components/Header.vue';

const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.component('appHeader', Header);
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
