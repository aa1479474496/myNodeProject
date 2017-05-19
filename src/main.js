// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import router from './router/router.js'

import reClass from './components/common/directive.js'

import 'bootstrap'
import './assets/css/bootstrap.min.css'
import './assets/css/main.css'

import api from './api/index'

Vue.use(ElementUI)
Vue.use(reClass)

Vue.prototype.api = api;

Vue.config.productionTip = false

new Vue({
    router: router,
    render: h => h(App)
}).$mount('#app');