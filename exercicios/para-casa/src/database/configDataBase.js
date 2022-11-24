const mongoose =  require("mongoose");

mongoose.connect(
   "mongodb+srv://judy:1986ldr@cluster0.mdfwajp.mongodb.net/reprograma"
);

const DataBase= mongoose.connection;
module.exports= DataBase;