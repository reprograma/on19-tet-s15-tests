const tarefasController = require("../controller/tarefasController")
const express = require("express");
const router = express.Router();


router.get("/", tarefasController.getAll);
router.post("/", tarefasController.postTarefa);
router.delete("/:id", tarefasController.deleteTarefa)

module.exports = router;