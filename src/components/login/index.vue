<template>
    <div class="index-main">
        <div class="index-main-body">
            <div class="index-tab-navs">
                <div class="navs-slider">
                    <a href="javascript:void(0);" :class="[classFlag.signup ? 'active' : '']" @click="login('signup')">注册</a>
                    <a href="javascript:void(0);" :class="[classFlag.signin ? 'active' : '']" @click="login('signin')">登录</a>
                    <span class="navs-slider-bar" :class="[classFlag.signin ? 'lineLeft' : '']"></span>
                </div>
            </div>
            <div class="view-signup" v-if="classFlag.signup">
                <reg></reg>
            </div>
            <div class="view-signup" v-if="classFlag.signin">
                <login></login>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        reg: require('./reg.vue'),
        login: require('./login.vue'),
    },
    data() {
        return {
            errorFiled: {},
            classFlag: {
                signup: true,
                signin: false
            }

        }
    },
    mounted() {
    },
    methods: {
        login(status) {
            switch (status) {
                case 'signin':
                    this.classFlag.signin = true;
                    this.classFlag.signup = false;
                    break;
                case 'signup':
                    this.classFlag.signup = true;
                    this.classFlag.signin = false;
                    break;
                default:
                    break;
            }
        }



    }
}
</script>