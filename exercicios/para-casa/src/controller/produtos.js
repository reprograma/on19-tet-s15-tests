const produtos = require('../model/produto')

const getAll = async (req, res) => {
  try {
    const produto = await produtos.find()
    res.status(200).send(produto)
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
}

const postProduto = (req, res) => {
  const novoProduto = new produtos(req.body)
  novoProduto.save(function (error) {
    if (error) res.status(500).send({ message: error.message })

    res.status(201).send(novoProduto.toJSON())
  })
}

const deletaProduto = async (req, res) => {
  try {
    const buscaProduto = await produtos.findById(req.params.id)

    await buscaProduto.delete()

    return res.status(200).send({
      mensagem: `Produto '${buscaProduto.nome}' deletado com sucesso!`,
      buscaProduto
    })
  } catch (err) {
    return res.status(400).send({
      mensagem: err.message
    })
  }
}

module.exports = {
  getAll,
  postProduto,
  deletaProduto
}
