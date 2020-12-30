const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const muv = require('mongoose-unique-validator');

const userSchema = new Schema({
  username: {
    type: String,
    //unique: true,
    required: true
  },
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// Adds unique validator to your user schema.
//UserSchema.plugin(muv);

// Mongoose will automatically look for the plural version of your model name.
// The it will create the model for your users collection
const User = mongoose.model('User', userSchema);

module.exports = User;
