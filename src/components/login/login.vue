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
                <input type="password" class="myCheck" :data-model='form.userPassword' data-errorName="passwordError,password" v-ck:password="form.userPassword" v-model="form.userPassword" placeholder="密码6-20位数字,字母或符号两种以上组合">
                <transition name="slide-fade">
                    <label v-show="errorFiled.passwordError == 'passwordError'" class="errorLable">
                        请输入正确的密码
                    </label>
                </transition>
            </div>
        </div>
        <div class="sign-button mt18" v-ckAll:check-form>登录</div>
        <router-link :to="{path: '/flex'}" tag="div">去flex页面</router-link>
        <!-- <div class="sign-button mt18">登录</div> -->
    
        <!--<ul id="example-2">
            <template v-for="(item, index) in items">
                <li v-if="index == 0" @click="test">
                    有事件：{{ parentMessage }} - {{ index }} - {{ item.message }}
                </li>
                <li v-else>
                    没有事件：{{ parentMessage }} - {{ index }} - {{ item.message }}
                </li>
            </template>
    
        </ul>-->
        <!--<h1>a.name : {{a.name}}</h1>
        <h1>a.age : {{a.age}}</h1>-->
        <!--<h1>a.age : {{a.num}}</h1>-->
    
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                { message: 'Foo' },
                { message: 'Bar' }
            ],
            errorFiled: {},
            form: {
                userName: '',
                userPhone: '',
                userPassword: ''
            },
            // a: {
            //     name: 'test'
                
            // },
            a: {}
        }
    },
    mounted() {
        var num = {
            name: 'num',
            age: 22
        }
        this.a = num;

        var b = {};
        console.log(b instanceof Object);
        var c = null;
        console.log(c instanceof Object);
        

       
        // this.a.age = 18;
        // this.$set(this.a,'age',22)
        // var num = {
        //     num: 123,
        //     age: 55
        // }
        // this.a = Object.assign({}, this.a, num);
        // console.log(this.a);
    },
    methods: {
        test() {
            alert(1)
        },
        //验证通过的回调函数
        checkSumbit() {
            this.api.login({
                name: this.form.userName,
                password: this.form.userPassword
            }).then(data => {
                if (data.code == 200) {
                    console.log(data);
                    // localStorage.setItem('username', data.name)
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