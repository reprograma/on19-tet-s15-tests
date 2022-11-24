const mongoose = require('mongoose');

const password = "Apll3012a";

mongoose.connect(
  `mongodb+srv://AnnaBarbosaa:${password}@cluster0.9bp02nj.mongodb.net/reprograma`
);

const db = mongoose.connection;

module.exports = db;