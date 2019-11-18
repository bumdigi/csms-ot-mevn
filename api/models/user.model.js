let passportLocalMongoose = require('passport-local-mongoose')
let mongoose = require('mongoose')
let Schema = mongoose.Schema

const userSchema = new mongoose.Schema({
  username: String,
  id: String,
  password: String,
  create_date: {type: Date, default: Date.now}
})

userSchema.plugin(passportLocalMongoose);


module.exports = mongoose.model('user', userSchema)