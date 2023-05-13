const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Ola mundo" });
});

app.post("/login", (req, res) => {
  const { usuario, senha } = req.body;
  const filePath = path.join(__dirname, "data", "login.json");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.log(`Error: ${err}`);
      return;
    }

    const users = JSON.parse(data);
    const usuarioEncontrado = users.find((user) => user.usuario === usuario);
    if (usuarioEncontrado.senha === senha) {
      res.json(usuarioEncontrado);
      return;
    }

    res.json({ erro: "Login e senha incorreto" });
  });
});

app.listen(3002, () => {
  console.log("Servidor online na porta 3002");
});
