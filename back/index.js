const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://viniblack:batata123@spa.r1hi4oh.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const db = client.db("Pizzaria");

async function insere1elemento() {
  const pizzas = db.collection("pizzas");
  const pizza = { nome: "4 Queijos", qtdPedacos: 8 };
  const result = await pizzas.insertOne(pizza);
  console.log(`O id da pizza inserida é: ${result.insertedId}`);
}

async function insereNelemento() {
  const pizzas = db.collection("pizzas");
  const documents = [
    { nome: "Calabresa", qtdPedacos: 8 },
    { nome: "Portuguesa", qtdPedacos: 8 },
    { nome: "Frango com Catupiry", qtdPedacos: 8 },
    { nome: "Marguerita", qtdPedacos: 8 },
    { nome: "Brigadeiro", qtdPedacos: 8 },
  ];
  const result = await pizzas.insertMany(documents);
  let ids = result.insertedIds;
  for (let id of Object.values(ids)) {
    console.log(`O id da pizza inserida é: ${id}`);
  }
}

async function selecionaValores() {
  const pizzas = await db.collection("pizzas").find();
  //   const pizzas = await db.collection("pizzas").find({ nome: "Marguerita" });
  for await (const pizza of pizzas) {
    console.log(pizza);
  }
}

async function atualizaValores() {
  const pizzas = db.collection("pizzas");
  const filtro = { nome: "Marguerita" };
  const update = { $set: { qtdPedacos: 10 } };
  await pizzas.updateOne(filtro, update);
  selecionaValores();
}

async function deletaValores() {
  const pizzas = db.collection("pizzas");
  const filtro = { nome: "Brigadeiro" };
  await pizzas.deleteOne(filtro);
  selecionaValores();
}

deletaValores();
