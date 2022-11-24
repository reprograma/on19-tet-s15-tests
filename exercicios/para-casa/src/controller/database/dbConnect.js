const MONGO_DATABASE = process.env.MONGO_DATABASE
const mongoose = require('mongoose')

mongoose.connect(MONGO_DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
console.log('DB connect')

let db = mongoose.connection

module.exports = db