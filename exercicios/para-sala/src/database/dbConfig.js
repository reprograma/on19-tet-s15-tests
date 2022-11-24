const mongoose = require('mongoose');

const password = "coldplay"

mongoose.connect(
  `mongodb+srv://shiteles:${password}@cluster0.gkb4smu.mongodb.net/reprograma` 
);

const db = mongoose.connection;

module.exports = db;