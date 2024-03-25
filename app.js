const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoutes = require("./src/routes/userRoutes");
const tweetRoutes = require("./src/routes/tweetRoutes");

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

app.use("/users", userRoutes);
app.use("/tweets", tweetRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
