//[X] - Criação de pasta e arquivo de test;
//[] - Estutura de código para teste das rotas da API;
//[] - Sintaxe de testes usando describe e matchers;
//[] - Uso do Jest e Supertest.




const tarefas = require("../models/tarefas");
const SECRET = process.env.SECRET
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")


const postTarefa = (req, res) => {
  const senhaComHash = bcrypt.hashSync(req.body.nome, 10);
  req.body.nome = senhaComHash;

  const tarefa = new tarefas(req.body);

 tarefa.save(function (err) {
    if (err) {
      return res.status(500).send({ message: err.message })
    }
   res.status(201).send(tarefa.toJSON());
  });
};



module.exports = {

    postTarefa,
  
}