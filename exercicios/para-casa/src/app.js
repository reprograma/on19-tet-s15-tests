require("dotenv").config()
const express = require("express")
const cors = require("cors")
const mongoose = require("./database/dbConnect")
const despesasRoute = require("./routes/despesasRoute")

const app = express()

app.use(express.json())
app.use(cors())
mongoose.connect()

app.use("/gastos", despesasRoute)

module.exports = app;