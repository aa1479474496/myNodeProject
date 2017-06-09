import Vue from 'vue'
import axios from './apiConfig'
import res from './resourceTypes'

Vue.use(axios)

export default {
    test() {
        return Vue.axios.get(res.TEST)
    },
    testPost(data) {
        return Vue.axios.post(res.TEST_POST,data)
    },
    reg(params) {
        return Vue.axios.post(res.REG, params)
    },
    login(params) {
        return Vue.axios.post(res.LOGIN, params)
    },
    upload(params) {
        return Vue.axios.post(res.UPLOAD, params)
    },
    headPortrait(params) {
        return Vue.axios.post(res.HEADPORTRAIT, params)
    }
}