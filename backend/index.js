const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://viniblack:batata123@spa.r1hi4oh.mongodb.net/?retryWrites=true&w=majority";
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const db = client.db("Users");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Ola mundo" });
});

app.post("/login", (req, res) => {
  const { usuario, senha } = req.body;
  const users = db.collection("users").find({ usuario: usuario }).toArray();

  users
    .then((result) => {
      if (senha == result[0].senha) {
        res.json({ usuario: result[0].usuario, senha: result[0].senha });
      } else {
        res.json({ erro: "Login e senha incorreto" });
      }
    })
    .catch((error) => {
      res.json({ erro: `${error}` });
    });
});

// app.post("/login", (req, res) => {
//   async function seleciona() {
//     const { usuario, senha } = req.body;
//     const users = db.collection("users").find({ usuario: usuario });
//     let arrayUser = [];
//     for await (const user of users) {
//       arrayUser.push(user);
//     }

//     if (senha == arrayUser[0].senha) {
//       res.json({ usuario: arrayUser[0].usuario, senha: arrayUser[0].senha });
//     } else {
//       res.json({ erro: "Login e senha incorreto" });
//     }
//   }

//   seleciona();
// });

app.post("/register", (req, res) => {
  const users = db.collection("users");
  const user = { usuario: req.body.usuario, senha: req.body.senha };

  users
    .insertOne(user)
    .then((result) => {
      res.json({
        message: `O id do usuario inserido é: ${result.insertedId}`,
      });
    })
    .catch((error) => {
      res.json({ erro: `${error}` });
    });
});

// app.post("/register", (req, res) => {
//   async function register() {
//     const users = db.collection("users");
//     const user = { usuario: req.body.usuario, senha: req.body.senha };
//     const result = await users.insertOne(user);
//     res.json({ message: `O id do usuario inserido é: ${result.insertedId}` });
//   }

//   register()
// });

app.listen(3002, () => {
  console.log("Servidor online na porta 3002");
});
