const mongoose = require('mongoose');

const password = //senha MongoDB

mongoose.connect(
  //link MongoDB 
);

const db = mongoose.connection;

module.exports = db;