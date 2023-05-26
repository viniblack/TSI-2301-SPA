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

app.listen(3002, () => {
  console.log("Server is running on port 3002");
});

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
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

const db = client.db("Kart");

app.post("/criar", (req, res) => {
  async function criar() {
    const pilotos = db.collection("pilotos");
    const piloto = {
      nome: req.body.nome,
      numero: req.body.numero,
      posicao: req.body.posicao,
      categoria: req.body.categoria,
    };
    const result = await pilotos.insertOne(piloto);
    res.json({ message: `O id do piloto inserido é: ${result.insertedId}` });
  }

  criar();
});

app.get("/pilotos", (req, res) => {
  async function selectPilotos() {
    const pilotos = await db.collection("pilotos").find();
    // const pizzas = await db.collection('pizzas').find( {nome : "Portuguesa"} );
    let respilotos = [];
    for await (let piloto of pilotos) {
      respilotos.push(piloto);
    }
    res.json({ message: respilotos });
  }
  selectPilotos();
});

app.get("/editar/:id", (req, res) => {
  async function selectPilotos(id) {
    let respilotos = [];
    const pilotos = await db
      .collection("pilotos")
      .find({ _id: new ObjectId(id) });
    for await (let piloto of pilotos) {
      respilotos.push(piloto);
    }
    res.json({ message: respilotos });
  }
  selectPilotos(req.params.id);
});

app.put("/editar/:id", (req, res) => {
  async function editar(id, body) {
    const pilotos = db.collection("pilotos");
    const filtro = { _id: new ObjectId(id) };
    const novosDados = { $set: body };
    await pilotos.updateOne(filtro, novosDados);
    res.json({ message: `O piloto foi editado com sucesso!` });
  }

  editar(req.params.id, req.body);
});

app.delete("/deletar/:id", (req, res) => {
  async function deletar(id) {
    const pilotos = db.collection("pilotos");
    const filtro = { _id: new ObjectId(id) };
    await pilotos.deleteOne(filtro);
    res.json({ message: `O piloto foi deletado com sucesso!` });
  }

  deletar(req.params.id);
});
