const mongoose = require('mongoose');

//const password = "babete09";

mongoose.connect(
  'mongodb+srv://tipopamela:babete09@cluster0.yqlddvw.mongodb.net/reprograma'
);

const db = mongoose.connection;

module.exports = db;