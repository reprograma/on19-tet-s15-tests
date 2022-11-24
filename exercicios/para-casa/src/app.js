const express = require('express');
const cors = require('cors');
const index = require("./routes/index");
const users = require('./routes/userRoutes');
const db = require('./database/dbConfig');
const app = express();

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
    console.log('Conexão com o banco feita com sucesso')
});

app.use(cors());
app.use(express.json());

app.use("/", index);
app.use("/users", users);

module.exports = app;