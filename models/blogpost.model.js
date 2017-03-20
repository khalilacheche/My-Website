var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BlogPostSchema = new Schema({
  title: String,
  date: { type: Date, default: Date.now },
  content: String
});

module.exports = mongoose.model('BlogPost', BlogPostSchema);
