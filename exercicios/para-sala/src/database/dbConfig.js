const mongoose = require('mongoose');


mongoose.connect(
  `mongodb+srv://lydiannecorrea:12345@cluster0.9oy4hez.mongodb.net/reprograma` 
);

const db = mongoose.connection;

module.exports = db;