const { Schema, model } = require('mongoose');

const communitySchema = new Schema({
  uniqueName: {
    type: String,
    unique: true,
  },
  displayName: String,
});

const Community = model('Community', communitySchema);
module.exports = Community;