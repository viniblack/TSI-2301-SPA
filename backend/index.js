const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

// Express
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Server
app.listen(3002, () => {
  console.log("Server is running on port 3002");
});

// MongoDB
const uri =
  "mongodb+srv://viniblack:batata123@spa.r1hi4oh.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const db = client.db("Todo");

// Rotas
app.get("/", (req, res) => {
  res.json({ message: "ToDo List funfando" });
});

app.post("/criar", (req, res) => {
  const tarefas = db.collection("tarefas");
  const tarefa = {
    nome: req.body.nome,
    status: req.body.status,
  };
  tarefas
    .insertOne(tarefa)
    .then((result) => {
      res.json({
        message: `O id do tarefa inserido é: ${result.insertedId}`,
      });
    })
    .catch((error) => {
      res.json({ erro: `${error}` });
    });
});

// Lista todas as tarefas
app.get("/listar", (req, res) => {
  const tarefas = db.collection("tarefas");
  tarefas
    .find()
    .toArray()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.json({ erro: `${error}` });
    });
});

// Listar só uma tarefa
app.get("/editar/:id", (req, res) => {
  async function selecttarefas(id) {
    let restarefas = [];
    const tarefas = await db
      .collection("tarefas")
      .find({ _id: new ObjectId(id) });
    for await (let tarefa of tarefas) {
      restarefas.push(tarefa);
    }
    res.json({ message: restarefas });
  }
  selecttarefas(req.params.id);
});

app.put("/atualizar/:id", (req, res) => {
  const tarefas = db.collection("tarefas");
  const id = req.params.id;
  const tarefa = {
    nome: req.body.nome,
    status: req.body.status,
  };
  tarefas
    .updateOne({ _id: new ObjectId(id) }, { $set: tarefa })
    .then((result) => {
      res.json({ message: `Tarefa editada com sucesso` });
    })
    .catch((error) => {
      res.json({ erro: `${error}` });
    });
});
