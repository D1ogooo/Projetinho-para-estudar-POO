const express = require("express");
const { randomUUID } = require("node:crypto");
const app = express();

class Pratos {
  constructor() {
    this.pratos = [];
  }

  create(req, res) {
    const { titulo, sobre } = req.body;
    const id = randomUUID();
    const novoPrato = { id, titulo, sobre };
    const verify = this.pratos.find((prato) => prato.titulo === titulo);

    if (!titulo || !sobre) {
      return res
        .status(400)
        .json({ error: "Todos os dados devem ser declarados" });
    }

    if (verify) {
      return res
        .status(400)
        .json({ error: "Os dados declarados já estão presentes" });
    }

    this.pratos.push(novoPrato);

    res.status(200).json({
      message: "Prato criado com sucesso!",
      prato: novoPrato,
    });
  }

  list(req, res) {
    return res.status(200).send(this.pratos);
  }

  update(req, res) {
    const { id, titulo, sobre } = req.body;
    const verify = this.pratos.find((prato) => prato.id === id);
    if (!verify) {
      res.status(400).json({ error: "O prato declarado não existe" });
    }

    this.pratos.map((prato) => {
     
    })
  }

  delete(req, res) {
    const { id } = req.params;
    const verify = this.pratos.find((prato) => prato.id === id);

    if (verify) {
      const positionPrato = this.pratos.findIndex((prato) => prato.id === id);
      const TodosPratos = this.pratos;
      TodosPratos.splice(positionPrato, 0);
      return res.status(201).send({ "sucesso!": "Prato deletado" });
    }
    res.status(400).json({ error: "O prato declarado não existe" });
  }
}

module.exports = new Pratos();
