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

var arr = [
  {'name': 'xiaoming', 'age': 12,      'count': 1},
  {'name': 'ava', 'age': 22, 'count': 6},
  {'name': 'xiao', 'age': 32, 'count': 5},
  {'name': 'xiaoming', 'age': 12, 'count': 1},
]
var temp = []
arr.map((item, index) => {
  let strItem = JSON.stringify(item)
  if (temp.indexOf(strItem) < 0) {
    temp.push(strItem)
  }
})

temp = temp.map(item => {
  return JSON.parse(item)
})
console.log(temp);



// var arr = [1,2,3,1,2,3]

// var temp = [];

// arr.forEach((item, index) => {
//   if (temp.indexOf(item) < 0) {
//     temp.push(item)
//   }
// })

// console.log(arr[0]['name']);