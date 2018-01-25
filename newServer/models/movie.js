const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  desc: {
    type: String,
    require: true
  },
  categoryId: { type: Schema.Types.ObjectId, ref: 'Category' },
});

module.exports = mongoose.model('Movie', MovieSchema);