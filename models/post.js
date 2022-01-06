const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: {type: String, required: true},
  category: {type: String, required: true, enum: ['Spoken', 'Visual', 'Written']},
  image: {type: String, required: true},
  link: {type: String},
  body: {type: String}
}, {
  timestamps: true,
});

module.exports = mongoose.model('Post', postSchema);