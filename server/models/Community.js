const { Schema, model } = require('mongoose');

const communitySchema = new Schema({
  name: String,
});

const Community = model('Community', communitySchema);
module.exports = Community;