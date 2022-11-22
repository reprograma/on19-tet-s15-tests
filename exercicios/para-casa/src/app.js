require("dotenv-safe").config();
const express = require('express');
const cors = require("cors");
const index = require("./routes/index");
const tarefa = require("./routes/tarefasRoute");
const db = require ("./database/dbConnect");

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
    console.log('Conexão com o banco feita com sucesso')
});


const app = express();

app.use(express.json());
app.use(cors());


app.use("/", index);
app.use("/tarefa", tarefa)

module.exports = app;
