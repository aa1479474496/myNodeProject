const mongoose = require('mongoose');
const Movie = require('./movie')
const Category = require('./category')



// const movie1 = new Movie({
//   name: '吴1文鑫佛',
//   desc: '测试',
//   categoryId: '5a617dc0d2249315fc18990d'
// })
// const movie2 = new Movie({
//   name: '蓝2巨人',
//   desc: '哈哈哈',
//   categoryId: '5a617dc0d2249315fc18990d'
// })

const category1 = new Category({
  name: '文1艺1片',
})
// const category2 = new Category({
//   _id: new mongoose.Types.ObjectId(),
//   name: '科2幻2片',
// })


let movie1, movie2

// category1.save((err, category) => {
//   if (err) return;
//   movie1 = new Movie({
//     name: '吴1文鑫佛',
//     desc: '测试',
//     categoryId: 'aa'
//   });
//   movie2 = new Movie({
//     name: '蓝2巨人',
//     desc: '哈哈哈',
//     categoryId: 'aa'
//   });

//   Promise.all([
//     movie1.save(function (err) {
//       if (err) return;
//       // thats it!
//     }),
//     movie2.save(function (err) {
//       if (err) return;
//       // thats it!
//     })
//   ]).then(() => {
//     Movie.findOne({ name: '蓝2巨人' })
//       .populate('categoryId')
//       .exec(function (err, movie) {
//         if (err) {
//           console.log(err);
//         }
//         console.log('-----');
//         console.log(movie);
//       })
//   })
// })

category1.save((err, category) => {
  console.log(222);
  if (err) {
    console.log(err);
    return 
  };
  console.log(333);
  movie1 = new Movie({
    name: '吴1文鑫佛',
    desc: '测试',
    categoryId: category._id
  });
  movie2 = new Movie({
    name: '蓝2巨人',
    desc: '哈哈哈',
    categoryId: category._id
  });


  // movie2.save(function (err) {
  //   if (err) return;
  //   // thats it!
  // })
  // Movie.findOne({ name: '蓝2巨人' })
  //   .populate('categoryId')
  //   .exec(function (err, movie) {
  //     if (err) {
  //       console.log(err);
  //     }
  //     console.log('-----');
  //     console.log(movie);
  //   })
  const asyncFind = async function () {
    await movie1.save(function (err) {
      if (err) return;
    });
    await movie2.save(function (err) {
      if (err) return;
    });
    Movie.findOne({ name: '蓝2巨人' })
      .populate('categoryId')
      .exec(function (err, movie) {
        if (err) {
          console.log(err);
        }
        console.log('-----');
        console.log(movie);
      })
  }
  asyncFind()





})







