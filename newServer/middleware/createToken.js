var jwt = require('jsonwebtoken');
var config = require('../config');

module.exports = function(name) {
    var expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);
    const token = jwt.sign({
        name: name,
        exp: parseInt(expiry.getTime() / 1000)
    }, config.secret);
    return token;
}
