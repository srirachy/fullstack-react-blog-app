const { Schema, model } = require('mongoose');

const commentSchema = new Schema({
  body: String,
  postId: String,
});

const Comment = model('Comment', commentSchema);
module.exports = Comment;