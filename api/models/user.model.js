var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let userSchema = new Schema({
  user: String,
  name: String,
  id: String,
  password: String,
  create_date: {type: Date, default: Date.now}
});

//Collection은 users

module.exports = mongoose.model('user', userSchema);