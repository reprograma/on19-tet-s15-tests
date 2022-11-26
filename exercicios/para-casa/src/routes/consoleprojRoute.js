const controller = require("../controllers/consolesprojController"); 

const express = require("express"); 

const router = express.Router();


router.get("/all", controller.findAllConsoles);
router.get("/developer", controller.findConsoleDev);
router.get("/available", controller.findConsoleAvailable);
router.get("/:id", controller.findConsoleById);
router.post("/add", controller.addNewConsole);
router.patch("/:id", controller.updateConsole);
router.delete("/delete/:id", controller.deleteConsole);


module.exports = router;