const express = require("express");

const app = express();

const port = 5000;

app.get("/", (req, res) => {
  res.send("Rota Funcionando");
});

app.listen(port, () => {
  console.log(`Escutando na porta: ${port}`);
});
