import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'

Vue.use(Router)

const routes = [{
    path: '/',
    name: 'login',
    component(resolve) {
        require(['./../components/login/login.vue'], resolve)
    }
}, {
    path: '/layout',
    name: 'layout',
    component(resolve) {
        require(['./../components/layout/layout.vue'], resolve)
    }
}, {
    path: '/login1',
    name: 'login1',
    component(resolve) {
        require(['./../components/login/login.1.vue'], resolve)
    }
}]


export default new Router({
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        // return 期望滚动到哪个的位置
        if (savedPosition) {

            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    },
    routes,
})