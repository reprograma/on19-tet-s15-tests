const controller = require("../controllers/tarefasController");
const express = require("express");
const router = express.Router();




router.post("/", controller.postTarefa);


module.exports = router;