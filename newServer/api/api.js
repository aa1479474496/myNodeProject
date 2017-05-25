const User = require('../models/user');

module.exports = {
    create(user) {
        return User.findOne(user).exec();
    }
}