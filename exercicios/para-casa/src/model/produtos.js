const mongoose = require('mongoose')

const produtoSchema = new mongoose.Schema(
  {
    id: { type: Number },
    descricao: { type: String },
    quantidade: { type: Number },
    preco: { type: Number },
    nome: { type: String }
  },
  {
    versionKey: false
  }
)

const produtos = mongoose.model('produtos', produtoSchema)

module.exports = produtos
