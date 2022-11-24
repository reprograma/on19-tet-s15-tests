const controller = require('../controllers/gamesController')

const express = require('express')

const router = express.Router()

router.get('/all', controller.findAllGames);
router.get("/:id", controller.findGameById);
router.get("/search/:gamebygenre", controller.findByGenre);
router.get("/:name", controller.findGameByName);
router.post("/add", controller.addNewGame);
router.patch("/:id", controller.updateGame);
router.delete("/:id", controller.deleteGame);

module.exports = router