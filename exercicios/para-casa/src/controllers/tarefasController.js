const tarefas = require("../models/tarefasModel");


const getAll = (req, res) => {
  tarefas.find(function (err, tarefas) {
    if (err) {
      return res.status(500).send({
        message: err.message
      })
    }
    return res.status(200).json(tarefas)
  })
};
  
  const postTarefa = (req, res) => {
    const tarefa = new tarefas(req.body);
    tarefa.save(function (err) {
      if (err) res.status(500).send({mensage: err.message})
      
      res.status(201).send(tarefa.toJSON());
    });
  };

  
  
  module.exports = {
      getAll,
      postTarefa,
      
  }
  