import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'

Vue.use(Router)

const routes = [{
    path: '/',
    name: 'home',
    component(resolve) {
        require(['./../components/home/home.vue'], resolve)
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