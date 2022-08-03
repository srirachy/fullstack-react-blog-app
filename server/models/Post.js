const { Schema, model } = require('mongoose');

const postSchema = new Schema({
  title: {
    type: String, 
    required: 'this is required',
    // could look into validator/validation later
    default: 'meow',
  },
  author: String,
  body: String,
  community: {
    type: Schema.Types.ObjectId,
    ref: 'Community',
  },
});

const Post = model('Post', postSchema);
module.exports = Post;