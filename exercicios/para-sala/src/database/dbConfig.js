const mongoose = require('mongoose');

//const password = "bk123456"; //senha do mongo

mongoose.connect("mongodb+srv://rafa_beckss:bk1234567@cluster0.pfskfk9.mongodb.net/reprograma");

const db = mongoose.connection;

module.exports = db;