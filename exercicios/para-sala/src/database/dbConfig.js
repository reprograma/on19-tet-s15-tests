const mongoose = require('mongoose');

const password = "reprograma19";

mongoose.connect(
  `mongodb+srv://lilianegomes:${password}@cluster0.w75dpov.mongodb.net/reprograma`
);

const db = mongoose.connection;

module.exports = db;