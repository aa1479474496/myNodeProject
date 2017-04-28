var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: { type: String },
    userphone: { type: String },
    userpwd: { type: String },
});

module.exports = mongoose.model('User', UserSchema)    