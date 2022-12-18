const mongoose = require('mongoose');

const password = "lari2108";

mongoose.connect(
  `mongodb+srv://larissafontes:${password}@cluster0.3f27kxu.mongodb.net/reprograma` 
);

const db = mongoose.connection;