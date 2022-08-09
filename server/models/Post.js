const { Schema, model } = require('mongoose');

const postSchema = new Schema({
  title: {
    type: String, 
    // required: 'this is required',
    // // could look into validator/validation later
    // default: 'meow',
  },
  slugifiedName: {
    type: String,
  },
  body: {
    type: String,
    // required: 'this is required',
    // default: 'meow'
  },
  community: {
    // type: Schema.Types.ObjectId,
    // ref: 'Community',
    type: String,
  },
  userName: {
    // type: Schema.Types.ObjectId,
    // ref: 'Profile'
    type: String,
  },
});

const Post = model('Post', postSchema);
module.exports = Post;