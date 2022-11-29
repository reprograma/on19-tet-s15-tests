const express = require("express")
const router = express.Router()

router.post("/", function (req, res) {
    res.status(200).send({
        title: "Reprograma On19 - Semana 15 - Testes",
        version: "1.0.0"
    })
})

module.exports = router