<template>
    <div id="check-form">
        <div class="group-inputs">
            <div class="input-wrapper">
                <input type="text" class="myCheck" :data-model='form.userName' data-errorName="nameError,freeChars20" v-model="form.userName" v-ck:freeChars20="form.userName" placeholder="姓名">
                <transition name="slide-fade">
                    <label v-show="errorFiled.nameError == 'nameError'" class="errorLable">
                        姓名不超过20个字符
                    </label>
                </transition>
            </div>
            <div class="input-wrapper">
                <input type="text" v-model="form.userPhone" placeholder="手机号（仅支持中国大陆）">
                <!--<transition name="slide-fade">
                                  <label v-show="check('phone', form.userPhone) === false || errorFiled.phone == 'phone'" class="errorLable">
                                      请输入正确的手机号
                                  </label>
                              </transition>-->
            </div>
            <div class="input-wrapper">
                <input type="password" class="myCheck" :data-model='form.userPassword' data-errorName="passwordError,password" v-ck:password="form.userPassword" v-model="form.userPassword" placeholder="密码6-20位数字,字母或符号两种以上组合">
                <transition name="slide-fade">
                    <label v-show="errorFiled.passwordError == 'passwordError'" class="errorLable">
                        密码6-20位数字,字母或符号两种以上组合
                    </label>
                </transition>
            </div>
        </div>
        <div class="sign-button mt18" v-ckAll:check-form>注册</div>
    </div>
</template>
<script>
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
    mounted() {
    },
    methods: {
        //验证通过的回调函数
        checkSumbit() {
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