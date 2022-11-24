const mongoose = require('mongoose');

const password = "1234";

mongoose.connect(
  `mongodb+srv://AlineHoffmann:1234@cluster0.5hbucqg.mongodb.net/reprograma` 
);

const db = mongoose.connection;

module.exports = db;