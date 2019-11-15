const mongoose = require('mongoose')
const Schema = mongoose.Schema

let Post = new Schema({
  userId: {
    type: String
  },
  text: {
    type: String
  },
  mode: {
    type: String
  },
  result: {
    type: JSON
  }
},{
  collection: 'posts'
})

module.exports = mongoose.model('Post', Post)
