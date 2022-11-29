const controller = require("../controllers/tarefasController");
const express = require("express");
const router = express.Router();




router.post("/", controller.createTarefa);


module.exports = router;