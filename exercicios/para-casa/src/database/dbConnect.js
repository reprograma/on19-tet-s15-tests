const mongoose = require('mongoose');

const password = "queodio01";

mongoose.connect(`mongodb+srv://dlsfarias:${password}@cluster0.go1bjkv.mongodb.net/reprograma`
 
);

const db = mongoose.connection;

module.exports = db;