const produtosController = require('../controller/produtos')
const express = require('express')
const router = express.Router()

router.get('/', produtosController.getAll)
router.post('/', produtosController.postProduto)
router.delete('/:id', produtosController.deletaProduto)

module.exports = router
