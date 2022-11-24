const express = require("express");
const cors = require("cors");
const cliente= require("./routes/clientRoutes.js");
const dataBase = require("./database/configDataBase.js");
const app= express();

dataBase.on("error", console.log.bind(console, "erro de conexão"));
dataBase.once("open", ()=>{
    console.log("Conexão com o banco feita com sucesso")
});

app.use(cors());
app.use(express.json());
app.use("/", cliente);

module.exports = app;