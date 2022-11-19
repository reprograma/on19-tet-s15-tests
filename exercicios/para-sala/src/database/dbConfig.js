const mongoose = require('mongoose');

const password = 

mongoose.connect(
  //`mongodb+srv://shiteles:${password}@cluster0.gkb4smu.mongodb.net/reprograma` 
);

const db = mongoose.connection;

module.exports = db;