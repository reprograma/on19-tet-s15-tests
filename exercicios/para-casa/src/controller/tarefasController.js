const tarefas = require("../model/tarefa");

const getAll = async (req, res) => {
  try {
      const tarefa = await tarefas.find();
      res.status(200).send(tarefa);
  } catch (error) {
      res.status(500).send({ message: error.message })
  }
}

const postTarefa = (req, res) => {
  const tarefa1 = new tarefas(req.body);
  tarefa1.save(function (error) {
    if (error) res.status(500).send({ message: error.message });

    res.status(201).send(tarefa1.toJSON());
  });
};

const deleteTarefa = async (req, res) => {
  try {
    const encontraTarefa = await tarefas.findById(req.params.id)

    await encontraTarefa.delete()

    return res.status(200).send({
      "mensagem": `A tarefa '${encontraTarefa.nome}' deletada com sucesso!`,
      encontraTarefa
    })

  } catch (err) {
    return res.status(400).send({
      "mensagem": err.message
    });
  };
}

module.exports = {
  getAll,
  postTarefa,
  deleteTarefa
};

