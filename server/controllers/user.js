var User = require('./../models/user.js');

//插入

exports.insert = function(req, res1, name, phone, pwd) {
    var user = new User({
        username: name,
        userphone: phone,
        userpwd: pwd
    });
    user.save(function(err, res) {
        if (err) {
            res1.json(err)
        } else {
            res1.json({
                code: 200,
                message: '注册成功'
            });
            console.log('ressss:' + res);
        }
    });
}

