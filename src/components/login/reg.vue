<template>
    <div>
        <div class="group-inputs">
            <div class="input-wrapper">
                <input type="text" v-model="form.userName" placeholder="姓名">
                <transition name="slide-fade">
                    <label v-show="check('freeChars10', form.userName) === false || errorFiled.freeChars10 == 'freeChars10'" class="errorLable">
                        姓名为10个字符
                    </label>
                </transition>
            </div>
            <div class="input-wrapper">
                <input type="text" v-model="form.userPhone" placeholder="手机号（仅支持中国大陆）">
                <transition name="slide-fade">
                    <label v-show="check('phone', form.userPhone) === false || errorFiled.phone == 'phone'" class="errorLable">
                        请输入正确的手机号
                    </label>
                </transition>
            </div>
            <div class="input-wrapper">
                <input type="password" v-model="form.userPassword" placeholder="密码（不少于 6 位）">
                <transition name="slide-fade">
                    <label v-show="check('password', form.userPassword) === false || errorFiled.password == 'password'" class="errorLable">
                        密码6-20位数字,字母或符号两种以上组合
                    </label>
                </transition>
            </div>
        </div>
        <div class="sign-button mt18" @click="registerUser">注册</div>
    </div>
</template>
<script>
import { myMixin } from '../common/mixin.js'
export default {
    data() {
        return {
            errorFiled: {},
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

        params() {
            var o = {
                'freeChars10': this.form.userName,
                'password': this.form.userPassword
            }
            return o;
        },
        registerUser() {
            var flag = this.checkAll(this.params());
            console.log('flag:' + flag);
            if (!flag) return;
            this.api.reg({
                name: this.form.userName,
                password: this.form.userPassword
            }).then(data => {
                if (data.code == 200) {
                    this.$router.replace({ path: '/admin' })
                }
                else {
                    this.$message.error({ showClose: true, message: data.msg });
                }
            }, err => {
                console.log(err);
            });


        }

    }
}
</script>