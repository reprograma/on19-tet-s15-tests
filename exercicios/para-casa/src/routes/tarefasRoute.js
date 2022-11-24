const controller = require("../controllers/tarefasController");
const express = require("express");
const router = express.Router();


router.get("/", controller.getAll);
router.get("/tarefas", controller.getAll);
router.post("/", controller.postTarefa);
//router.post("/login", controller.login);
router.delete("/delete/:id", controller.deleteTarefaById);

module.exports = router;