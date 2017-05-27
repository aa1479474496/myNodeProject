const express = require('express');
const router = express.Router();
const createToken = require('../middleware/createToken');
const User = require('../models/user');
const ports = require('./port');
const moment = require('moment');

//用户登录
let login = (req, res, next) => {
    if (!req.body.name || !req.body.password) {
        return res.json({
            code: -200,
            msg: '请输入您的账号密码.'
        });
    }
    const { name, password } = req.body;
    User.findOne({ name }).then(data => {
        if (data && password == data.password) {
            return res.json({
                code: 200,
                token: createToken(name)
            })
        } else {
            return res.json({
                code: -200,
                msg: '用户名或者密码错误'
            })
        }
    }).catch(err => {
        next(err);
        return res.json({
             code: -200,
             msg: err.toString()
        })
    })
}
router.post(ports.LOGIN, login);
module.exports = router;