const mongoose = require('mongoose');

<<<<<<< HEAD
//const password = "bk123456"; //senha do mongo
=======
const password = "aerosmith";
>>>>>>> 11734294bd41ce13c6ae1f0f67f44c650f2277d5

mongoose.connect("mongodb+srv://rafa_beckss:bk1234567@cluster0.pfskfk9.mongodb.net/reprograma");

const db = mongoose.connection;

module.exports = db;