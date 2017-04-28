<template>
    <div class="index-main-body">
        <div class="index-tab-navs">
            <div class="navs-slider">
                <a href="javascript:void(0);"
                   :class="[classFlag.signup ? 'active' : '']"
                   @click="login('signup')">注册</a>
                <a href="javascript:void(0);"
                   :class="[classFlag.signin ? 'active' : '']"
                   @click="login('signin')">登录</a>
                <span class="navs-slider-bar"
                      :class="[classFlag.signin ? 'lineLeft' : '']"></span>
            </div>
        </div>
        <div class="view-signup"
             v-if="classFlag.signup">
            <div class="group-inputs">
                <div class="input-wrapper">
                    <input type="text"
                           v-model="form.userName"
                           placeholder="姓名">
                </div>
                <div class="input-wrapper">
                    <input type="text"
                           v-model="form.userPhone"
                           placeholder="手机号（仅支持中国大陆）">
                </div>
                <div class="input-wrapper">
                    <input type="password"
                           v-model="form.userPassword"
                           placeholder="密码（不少于 6 位）">
                </div>
            </div>
            <div class="sign-button mt18"
                 @click="registerUser">注册</div>
        </div>
        <div class="view-signup"
             v-if="classFlag.signin">
            <div class="group-inputs">
                <div class="input-wrapper">
                    <input type="text"
                           placeholder="手机号或邮箱">
                </div>
                <div class="input-wrapper">
                    <input type="password"
                           placeholder="密码">
                </div>
            </div>
            <div class="sign-button mt18">登录</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            classFlag: {
                signup: true,
                signin: false
            },
            form: {
                userName: '',
                userPhone: '',
                userPassword: ''
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
        },
        registerUser() {
            this.api.testPost({ userName: this.form.userName, userPhone: this.form.userPhone, userPassword: this.form.userPassword }).then(response => {
                console.log(response);
            }, response => {
                console.log('error');
            });
        }
    }
}
</script>