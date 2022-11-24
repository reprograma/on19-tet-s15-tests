const mongoose = require('mongoose')

const despesaSchema = new mongoose.Schema(
    {

        id: mongoose.Schema.Types.ObjectId,
        nome: {
            type: String,
            required: true
        },
        itemComprado: {
            type: String,
            required: true
        },
        dataDeCompra: {
            type: Date,
            default: Date.now
        },
        categoria: {
            type: String,
            required: true
        },
        metodoDePagamento: {
            type: String,
            required: true
        },
        valor: {
            type: Number,
            required: true
        }
    }, {
    versionKey: false
});

module.exports = mongoose.model('despesa', despesaSchema);