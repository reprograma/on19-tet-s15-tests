const controller = require("../controllers/despesasController")
const express = require("express")
const router = express.Router();

router.get("/", controller.getAll);
router.post("/", controller.postDespesa);
router.delete("/:id", controller.deleteDespesa);


module.exports = router