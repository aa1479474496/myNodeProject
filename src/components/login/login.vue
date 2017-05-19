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
                <div class="group-inputs">
                    <div class="input-wrapper" v-re>
                        <input type="text" v-model="form.userName" placeholder="姓名">
                        <label 
                            :class="[(check('freeChars10', form.userName) === false || errorFiled.freeChars10 == 'freeChars10')?'is-visible':'']" class="errorLable">
                            姓名为10个字符密码6-20位数字,字母或符号两种以上组合
                        </label>
                    </div>
                    <div class="input-wrapper" v-re>
                        <input type="text" v-model="form.userPhone" placeholder="手机号（仅支持中国大陆）">
                        <label 
                            :class="[(check('phone', form.userPhone) === false || errorFiled.phone == 'phone')?'is-visible':'']" class="errorLable">
                            请输入正确的手机号
                        </label>
                    </div>
                    <div class="input-wrapper" v-re>
                        <input type="password" v-model="form.userPassword" placeholder="密码（不少于 6 位）">
                         <label 
                            :class="[(check('password', form.userPassword) === false || errorFiled.password == 'password')?'is-visible':'']" class="errorLable">
                            密码6-20位数字,字母或符号两种以上组合
                        </label>
                    </div>
                </div>
                <div class="sign-button mt18" @click="registerUser">注册</div>
            </div>
            <div class="view-signup" v-if="classFlag.signin">
                <div class="group-inputs">
                    <div class="input-wrapper">
                        <input type="text" placeholder="手机号或邮箱">
                    </div>
                    <div class="input-wrapper">
                        <input type="password" placeholder="密码">
                    </div>
                </div>
                <div class="sign-button mt18">登录</div>
            </div>
        </div>
    </div>
</template>

<script>
import { myMixin } from '../common/mixin.js'
export default {
    data() {
        return {
            errorFiled: {},
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
    mixins: [myMixin],
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
        params() {
                var o = {
                    'freeChars10' : this.form.userName ,
                    'phone' : this.form.userPhone,
                    'password' : this.form.userPassword
                }
                return o;
            },
        registerUser() {
                var flag = this.checkAll(this.params());
                console.log('flag:' + flag);
        }
         // registerUser() {
        //     this.api.testPost({ userName: this.form.userName, userPhone: this.form.userPhone, userPassword: this.form.userPassword }).then(response => {
        //         console.log(response);
        //     }, response => {
        //         console.log('error');
        //     });
        // }
    }
}
</script>