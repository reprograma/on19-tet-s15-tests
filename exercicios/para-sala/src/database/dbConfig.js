const mongoose = require('mongoose');

const password = "12345";

mongoose.connect(
  `mongodb+srv://liliatatyany:${password}@cluster0.l9j3rad.mongodb.net/reprograma` 
);

const db = mongoose.connection;

module.exports = db;