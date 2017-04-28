var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');

var main = require('./controllers/user.js');
var User = require('./models/user.js');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
// app.use(multer()); // for parsing multipart/form-data

var mongoose = require('mongoose'),
    DB_URL = 'mongodb://localhost/nodeApp';

//连接
mongoose.connect(DB_URL);
mongoose.Promise = global.Promise;
//连接成功
mongoose.connection.on('connected', function() {
    console.log('Mongoose connection open to ' + DB_URL);
});

//连接异常
mongoose.connection.on('error', function(err) {
    console.log('Mongoose connection error: ' + err);
});

//连接断开
mongoose.connection.on('disconnected', function() {
    console.log('Mongoose connection disconnected');
});


var questions = [{
        data: 21,
        num: 444,
        age: 12
    },
    {
        data: 456,
        num: 678,
        age: 13
    }
];
app.post('/testPost', function(req, res) {
    //   console.log(req.body);

      main.insert(req, res,req.body.userName,req.body.userPhone,req.body.userPassword);
    // var user = new User({
    //     username: req.body.userName,
    //     userphone: req.body.userPhone,
    //     userpwd: req.body.userPassword
    // });
    // user.save(function(err, res1) {
    //     if (err) {
    //         console.log('error');
    //     } else {
    //         res.json(req.body)
    //     }
    // });
    //   res.json(req.body);
})
app.get('/', function(req, res, next) {
    res.send('home-vue');
});
app.get('/test', function(req, res, next) {
    res.status(200),
        res.json(questions)
});

app.listen(3000, function() {
    console.log('Express started on http://localhost:3000');
});