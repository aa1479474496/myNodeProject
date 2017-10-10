import axios from 'axios'

let instance = axios.create({
    // baseURL: '/api/'
    baseURL: '/appServer/'
})
instance.interceptors.response.use((res) => {
    return res.data;
}, (error) => {
    return Promise.reject(error);
});

function plugin(Vue) {
    if (plugin.installed) {
        return
    }

    Vue.axios = instance

    Object.defineProperties(Vue.prototype, {

        $axios: {
            get() {
                return Vue.axios.bind(this)
            }
        }

    })
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(plugin)
}

export default plugin