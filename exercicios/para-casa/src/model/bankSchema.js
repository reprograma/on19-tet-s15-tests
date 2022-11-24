const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    cpf: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true

    },
    tipoDeConta :{
        type: String,
        required: false

    },
    saldo:{
        type: Number,

    },

    createdAt: {
        type: Date,
        default: new Date()
    }
});

module.exports = mongoose.model('cliente', clienteSchema);