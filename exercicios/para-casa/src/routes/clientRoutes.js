const express =  require("express");
const route = express.Router();
const controller = require("../controller/clientesControllers.js")

route.get("all", controller.getAll);
route.post("add", controller.createCliente);
route.delete("delete/:id", controller.deleteClientePorId);

module.exports= route;
