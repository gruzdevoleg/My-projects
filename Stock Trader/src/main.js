import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import { routes } from './routes.js';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './custom.less';
import { createPopper } from '@popperjs/core';
// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
//Vue.use(IconsPlugin);
Vue.use(VueRouter);
import Header from './components/Header.vue';

const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.component('appHeader', Header);
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
