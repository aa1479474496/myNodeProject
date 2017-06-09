const regList = {
        // 员工列表校验字段
        freeChars1: /^[\s\S]{1,}$/, //至少1个字符
        freeChars5: /^[\s\S]{1,5}$/, //任意5个字符
        freeChars10: /^[\s\S]{1,10}$/, //任意10个字符
        freeChars20: /^[\s\S]{1,20}$/, //任意20个字符
        phone: /^1[3|4|5|7|8]\d{9}$/, //手机号
        email: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, //email
        password: /^(?!^[0-9]+$)(?!^[a-zA-Z]+$)^.{6,20}$/, //密码6-20位数字,字母或符号两种以上组合
        postcode: /^[1-9]\d{5}(?!\d)$/, //邮编
        decimals: /^(?!0+(?:\.0+)?$)(?:[1-9]\d*|0)(?:\.\d{1,2})?$/, //数字，可保留两位小数,比0大
        decimals2: /^(([1-9]\d{0,9})|0)(\.\d{1,2})?$/, //数字，可保留两位小数
        chineseWord: /^[\u4e00-\u9fa5]{1,4}$/, //不超过四个中文字
        integer: /(^[1-9]([0-9]*)$|^[1-9]$)/, //请输入数字(整数,不包含0)
        minnum2: /(^[1-9]([0-9]+)$|^[2-9]$)/, //请输入数字(整数,最小为2)
        tel: /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/, //固定电话如021-60488068
        url: /^www\.[a-zA-Z0-9]{1,}\.com$/, //品牌官网
        // 角色管理
        freeChars30: /^[\s\S]{1,30}$/, //任意30个字符, 角色名称
        freeChars40: /^[\s\S]{1,40}$/,
        sortOrder: /(^[1-9]([0-9]*)$|^[0-9]$)/, //排序值 整数(0--)

        bankAccount: /^(\d{1,40})$/,
        invoiceRegisterNum: /^([a-zA-Z0-9]{15}|[a-zA-Z0-9]{18})$/,
        //地区管理 国家代码 必填项,输入框,不超过20个字符freeChars20 纬度,经度 输入框,可保留6位小数
        degree: /^-?\d+(.?\d{1,6})?$/,

        // 系统及字段管理 权限代码reeChars20  权限名称freeChars30  显示名称reeChars20  提示语 必填,输入框 freeChars50
        freeChars50: /^[\s\S]{1,50}$/,
        freeChars100: /^[\s\S]{1,100}$/,
        freeChars200: /^[\s\S]{1,200}$/,
        freeChars250: /^[\s\S]{1,250}$/,
        freeChars255: /^[\s\S]{1,255}$/,
        interger01: /^[01]$|^0.\d{2}$/
    }
    // class Check {
    //     constructor(el, errorArr, value, vm) {
    //         this.el = $(el);
    //         this.errorName = errorArr.split(',')[0] || '';
    //         this.reg = errorArr.split(',')[1] || '';
    //         this.flag = true;
    //         this.vm = vm;
    //     }
    //     regCheck() {
    //         this.flag = regList[this.reg].test(this.errorName);
    //         this.flag ? this.vm.$set(this.vm.errorFiled, this.errorName, '') : this.vm.$set(this.vm.errorFiled, this.errorName, this.errorName);
    //         return this.flag
    //     }
    // }

// function Check(el, errorArr, value, vm) {
//     this.el = $(el);
//     this.errorName = errorArr.split(',')[0] || '';
//     this.reg = errorArr.split(',')[1] || '';
//     this.flag = true;
//     this.vm = vm;
// }
// Check.prototype.regCheck = function() {
//     this.flag = regList[this.reg].test(this.errorName);
//     this.flag ? this.vm.$set(this.vm.errorFiled, this.errorName, '') : this.vm.$set(this.vm.errorFiled, this.errorName, this.errorName);
//     return this.flag
// }


var reClass = {};
reClass.install = function(Vue, options) {
    Vue.directive('ck', {
        update(el, binding, vnode) {
            let vm = vnode.context,
                reg = binding.arg,
                name = binding.name,
                expression = binding.expression,
                value = binding.value,
                errorArr = $(el).attr('data-errorName');
            if (errorArr == undefined) {
                throw "请传入正确的data-errorName";
            }
            if (value) {
                check(el, errorArr, value, vm);
            }
        }
    });
    Vue.directive('ckAll', {
        bind: function(el, binding, vnode) {
            let vm = vnode.context;
            let reg = binding.arg;

            $(el).on('click', function() {
                let errcount = 0;
                let list = $(this).parents('#' + reg).find('.myCheck');
                list.each((index, item) => {
                    let value = $(item).attr('data-model'),
                        errorArr = $(item).attr('data-errorName');

                    if (value == undefined || errorArr == undefined) {
                        throw "请传入正确的data-model或者data-errorName";
                    };
                    let flag = check(el, errorArr, value, vm);
                    if (!flag) {
                        errcount++;
                    }
                });
                if (errcount == 0) {
                    vm.checkSumbit();
                } else {
                    throw '验证不通过';
                }
            });


            // window.onresize = function() {
            //     console.log($(window).height());
            // }

        }

    });



}

function check(el, errorArr, value, vm) {
    const errorName = errorArr.split(',')[0] || '';
    const reg = errorArr.split(',')[1] || '';
    const flag = regList[reg].test(value);
    flag ? vm.$set(vm.errorFiled, errorName, '') : vm.$set(vm.errorFiled, errorName, errorName);
    return flag;
}




function hasClass(obj, cls) {
    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

function addClass(obj, cls) {
    if (!this.hasClass(obj, cls)) obj.className += " " + cls;
}

function removeClass(obj, cls) {
    if (hasClass(obj, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        obj.className = obj.className.replace(reg, ' ');
    }
}



module.exports = reClass;