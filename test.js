// var a = 7 && 0;
// var b = 0 && 7;
// var c = 7 && 1;

// console.log(a ,b ,c);


// function test(a) {
//   console.log(a);
//   function a() {}
//   var a = 5;
//   console.log(a);
// }
// test(8);


// let arr = [4,5,6,7,8]

// let max = Math.max.apply(null,arr);
// console.log(max);

// @testable
// class MyTestableClass {

// }

// function testable(target) {
//   target.isTestable = true
// }

// console.log(MyTestableClass.isTestable);

// var arr = [
//   {'name': 'xiaoming', 'age': 12,      'count': 1},
//   {'name': 'ava', 'age': 22, 'count': 6},
//   {'name': 'xiao', 'age': 32, 'count': 5},
//   {'name': 'xiaoming', 'age': 12, 'count': 1},
// ]
// var temp = []
// arr.map((item, index) => {
//   let strItem = JSON.stringify(item)
//   if (temp.indexOf(strItem) < 0) {
//     temp.push(strItem)
//   }
// })

// temp = temp.map(item => {
//   return JSON.parse(item)
// })
// console.log(temp);



// var arr = [1,2,3,1,2,3]

// var temp = [];

// arr.forEach((item, index) => {
//   if (temp.indexOf(item) < 0) {
//     temp.push(item)
//   }
// })

// console.log(arr[0]['name']);


// var arr = [1,2,3]
// arr[10] = 99

// console.log(arr[3]);

// var ary = Array(3);
// ary[0]=2
// ary = ary.map(function(elem) { return '1'; });
// console.log(ary);

// function sidEffecting(ary) {
//   ary[0] = ary[2];
// }
// function bar(a,b,c=3) {
//   c = 10
//   sidEffecting(arguments);
//   return a + b + c;
// }
// var b = bar(1,1,1)
// console.log(b);


// console.log([,,,].join(", "));

// var a = {class: "Animal", name: 'Fido'};
// console.log(a.class);

// function foo(a) {
//   var a;
//   return a;
// }

// console.log(foo('hello'));

// function fun(n,o) {
//   console.log(o)
//   return {
//     fun:function(m){
//       return fun(m,n);
//     }
//   };
// }
// var a = fun(0);  a.fun(1);  a.fun(2);  a.fun(3);


// var b = fun(0).fun(1).fun(2).fun(3);
// var c = fun(0).fun(1);  c.fun(2);  c.fun(3);




//答案：

//a: undefined,0,0,0
//b: undefined,0,1,2
//c: undefined,0,1,1

// 柯里化函数实现 

// function curry(fn) {
//   var args = Array.prototype.slice.call(arguments, 1);
//   return function() {
//     var innerArgs = Array.prototype.slice.call(arguments);
//     var finalArgs = args.concat(innerArgs);
//     return fn.apply(null, finalArgs);
//   }
// }

// function add(num1, num2) {
//   return num1 + num2;
// }

// var curriedAdd = curry(add, 5);
// console.log(curriedAdd(12));

// 自定义事件
// function EventTarget() {
//   this.handlers = {};
// }

// EventTarget.prototype = {
//   constructor: EventTarget,
//   addHandler: function(type, handler) {
//     if (typeof this.handlers[type] == "undefined") {
//       this.handlers[type] = [];
//     }
//     this.handlers[type].push(handler);
//   },

//   fire: function(event) {
//     if (!event.target) {
//       event.target = this;
//     }
//     if (this.handlers[event.type] instanceof Array) {
//       var handlers = this.handlers[event.type];
//       for (var i = 0, len = handlers.length; i < len; i++) {
//         handlers[i](event);
//       }
//     }
//   },

//   removeHandler: function(type, handler) {
//     if (this.handlers[type] instanceof Array) {
//       var handlers = this.handlers[type];
//       for (var i = 0, len = handlers.length; i < len; i++) {
//         if (handlers[i] === handler) {
//           break;
//         }
//       }
//       handlers.splice(i ,1);
//     }
//   }
// }

// function handleMessage(event) {
//   console.log("Message received: " + event.message);
// }
// function test(event) {
//   console.log("test: " + event.message);
// }

// // 创建一个新对象
// var target = new EventTarget();

// // 添加一个事件处理程序
// target.addHandler('message', handleMessage);
// target.addHandler('message', test);

// // 触发事件
// target.fire({ type: 'message', message: 'Hello world!' });

// 删除事件处理程序
// target.removeHandler('message', handleMessage);

// 再次，应没有处理程序
// target.fire({ type: 'message', message: 'Hello worldaa' });



// cookie处理函数

// name=name1=value1&name2=value2&name3=value3&name4=value4&name5=value5

// var SubCookieUtil = {
//   get: function(name, subName) {
//     var subCookies = this.getAll(name);
//     if (subCookies) {
//       return subCookies[subName];
//     }
//     else {
//       return null;
//     }
//   },

//   getAll: function(name) {
//     var cookieName = encodeURIComponent(name) + "=",
//         cookieStart = document.cookie.indexOf(cookieName),
//         cookieValue = null,
//         cookieEnd,
//         subCookies,
//         i,
//         parts,
//         result = {};
    
//     if (cookieStart > -1) {
//         cookieEnd = document.cookie.indexOf(";", cookieStart);
//     }    
//   }
// }


// var plugin =(function(){
//     function _firstFunc(str){
//         console.log(str);
//     };
//     return{
//         firstFunc: _firstFunc,
//     };
// })();

// plugin.firstFunc(123)

// (function(){
//   //定义一些默认参数
//   var _options={
//       default_word:"default hello"                
//   }

//   //定义一些api
//   var _plugin_api = {
//       firstFunc:function(str = _options.default_word){
//           console.log(str);
//           return this;//返回当前方法
//       },
//       secondFunc:function(){
//         console.log("secondFunc");
//           return this;//返回当前方法
//       }
//   }
//   //这里确定了插件的名称
//   console.log(this);
//   this.CJPlugin = _plugin_api;
// })();

// CJPlugin.firstFunc("hello");//hello
// CJPlugin.firstFunc();//default hello
// CJPlugin.secondFunc();//secondFunc


// var name = 'john';
// var name;
// console.log(name);


// console.log(name);
// function name() {
//   return 1
// }
// var name = 2



