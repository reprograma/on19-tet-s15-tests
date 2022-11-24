const mongoose = require('mongoose');

<<<<<<< HEAD
const password = "1234";
=======
const password = "aerosmith";
>>>>>>> 11734294bd41ce13c6ae1f0f67f44c650f2277d5

mongoose.connect(
  `mongodb+srv://AlineHoffmann:1234@cluster0.5hbucqg.mongodb.net/reprograma` 
);

const db = mongoose.connection;

module.exports = db;