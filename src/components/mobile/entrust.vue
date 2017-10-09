<template>
    <div>
        <div id="check-form">
            <div class="mb20">
                姓名：
                <input type="text" placeholder="请输入姓名" class="input myCheck" v-model="username" :data-model="username" data-errorName="username,freeChars5">
            </div>
            <div class="mb20">
                手机号：
                <input type="text" placeholder="请输入手机号" class="input myCheck" v-model="userphone" :data-model="userphone" data-errorName="userphone,phone">
            </div>
            <div class="submit" v-mckAll:check-form>提交</div>
        </div>
        <!--验证错误提示框-->
        <!--<div class="entrust-mask" v-if="errorFiled.showflag">
            <div class="mask-bac" ontouchmove="return false;" @click="errorFiled.showflag = false;"></div>
            <div class="entrust-error-content">{{errorFiled.errorText}}</div>
        </div>-->
        <transition name="slide-fade" mode="out-in">
            <error-modal v-if="errorFiled.showflag" :error-text="errorFiled.errorText" @errorHide="errorHide"></error-modal>
        </transition>
    </div>
</template>
<script>
export default {
    data() {
        return {
            errorFiled: {
                errorName: '',
                errorText: '',
                showflag: false,
                errorTips: {
                    username: '用户名不正确',
                    userphone: '手机号不正确',
                }
            },
            username: '',
            userphone: ''
        }
    },
    components: {
        errorModal: require('./../common/errorModal.vue'),
    },
    mounted() {
    },
    methods: {
        errorHide() {
            this.errorFiled.showflag = false;
        },
        checkSumbit() {
            console.log('验证通过');
        }
    }

}
</script>







<style scoped>
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.mb20 {
    margin-bottom: 20px;
}

.input {
    height: 45px;
    border: 1px solid #e4e4e4;
    width: 200px;
}

.submit {
    line-height: 50px;
    color: #f00;
    text-align: center;
}
</style>