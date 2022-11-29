//[X] - Criação de pasta e arquivo de test;
//[] - Estutura de código para teste das rotas da API;
//[] - Sintaxe de testes usando describe e matchers;
//[] - Uso do Jest e Supertest.




const tarefaSchema = require("../models/tarefas");


const createTarefa = async (req, res) => {
  try {
    const newTarefa = new tarefaSchema(req.body);

    const savedTarefa = await newTarefa.save( );

    return res.status(201).send({
      "message": "Tarefa criada com sucesso",
      savedTarefa
    });
  } catch (e) {
    console.error(e);
  };
};


module.exports = {

  createTarefa,
  
}