// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'bootstrap'
import './assets/css/bootstrap.min.css'
import './assets/css/main.css'

import api from './api/index'
Vue.prototype.api = api;

Vue.config.productionTip = false

new Vue({
    router: router,
    render: h => h(App)
}).$mount('#app');