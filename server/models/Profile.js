const { Schema, model } = require('mongoose');

const profileSchema = new Schema({
  userName: String,
  firstName: String,
  lastName: String,
  middleName: {
    type: String, 
    required: false,
    default: 'meow',
  },
});

const Profile = model('Profile', profileSchema);
module.exports = Profile;