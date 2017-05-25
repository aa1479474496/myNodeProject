const express = require('express');
const router = express.Router();
const createToken = require('../middleware/createToken');
const User = require('../models/user');
const ports = require('./port');
const moment = require('moment');


// 用户注册
let reg = (req, res, next) => {
    if (!req.body.name || !req.body.password) {
        res.json({ 
            code: -200, msg: '请输入您的账号密码.' 
        });
    }
    const { name, password } = req.body;
    const d = new Date();
    const user = new User({
        name,
        password,
        create_time: d
    });
    User.findOne({
        name: name
    }).then(data => {
        if (data) {
            res.json({ 
                code: -200, msg: '该账号已注册' 
            });
        } else {
            user.save((err, data) => {
                if (err) {
                    res.json(err)
                } else {
                    res.json({
                        code: 200,
                        msg: '注册成功',
                        token: createToken('name'),
                        d: moment(data.create_time).format('YYYY-MM-DD HH:mm:ss')
                    })
                }
            })
        }
    }).catch(err => res.json(err));
}

router.post(ports.REG, reg);
module.exports = router;