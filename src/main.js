// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// @import "~bootstrap/scss/bootstrap";
// import 'bootstrap/js/dist/util';
// import 'bootstrap/js/dist/dropdown';
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
