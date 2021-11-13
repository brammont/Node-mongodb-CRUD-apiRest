const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String },
  username: { type: String },
  email: { type: String },
  avatar: { type: String },
});

module.exports = User = mongoose.model('User', UserSchema);