const { Schema, model } = require('mongoose');

const postSchema = new Schema({
  title: {
    type: String, 
    required: 'this is required',
    // could look into validator/validation later
    default: 'meow',
  },
  body: String,
  community: {
    type: Schema.Types.ObjectId,
    ref: 'Community',
  },
  userName: {
    type: Schema.Types.ObjectId,
    ref: 'Profile'
  }
});

const Post = model('Post', postSchema);
module.exports = Post;