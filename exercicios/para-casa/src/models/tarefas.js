const mongoose = require('mongoose');

const tarefasSchema = new mongoose.Schema({
    _id : { type : mongoose.Schema.Types.ObjectId, default: mongoose.Types.ObjectId,},
    descricao: { type: String },
    dataInclusao: { type: String },
    concluido: { type: Boolean },
    nomeColaboradora: { type: String },
    password: { type: String }
    
},{
    versionKey: false
})

const tarefas = mongoose.model('tarefas', tarefasSchema);

module.exports = tarefas