const mongoose = require('mongoose');

const password = "aerosmith";

mongoose.connect(
  `mongodb+srv://admin:${password}@cluster0.1vuycki.mongodb.net/reprograma` 
);

const db = mongoose.connection;

module.exports = db;