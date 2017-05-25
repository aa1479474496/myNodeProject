const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const config = require('./config');

const routes = require('./routes');


let port = process.env.PORT || 3030;

app.use(morgan('dev'));//命令行中显示程序运行日志，便于Bug调试
app.use(bodyParser.urlencoded( {extended: false }));
app.use(bodyParser.json());
routes(app);
// 跨域
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");//预检请求使用
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");//预检请求使用
    next();
});

mongoose.Promise = global.Promise;
mongoose.connect(config.database);

app.listen(port, () => {
    console.log('listening on port : ' + port);
})