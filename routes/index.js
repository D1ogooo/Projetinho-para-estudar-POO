const express = require("express");
const routes = express.Router();
const Pratos = require("../controllers/PratosController");

routes.post("/pratos/create", (req, res) => Pratos.create(req, res)); // c
routes.get("/pratos/list", (req, res) => Pratos.list(req, res)); // r
routes.put("/pratos/update", (req, res) => Pratos.update(req, res));
routes.delete("/pratos/delete/:id", (req, res) => Pratos.delete(req, res)); // d

module.exports = routes;
