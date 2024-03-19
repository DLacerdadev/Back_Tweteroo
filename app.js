const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;

let users = [];

app.use(bodyParser.json());

app.post("/sign-up", (req, res) => {
  const { username, avatar } = req.body;

  const existingUser = users.find((user) => user.username === username);
  if (existingUser) {
    return res.status(400).send("Usuário já existe");
  }

  const newUser = { username, avatar };
  users.push(newUser);

  res.status(201).send("Usuário cadastrado com sucesso");
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
