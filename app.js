const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;

let users = [];
let tweets = [];

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

app.post("/tweets", (req, res) => {
  const { username, tweet } = req.body;

  const existingUser = users.find((user) => user.username === username);
  if (!existingUser) {
    return res.status(400).send("Usuário não encontrado");
  }

  const newTweet = { username, avatar: existingUser.avatar, tweet };
  tweets.push(newTweet);

  res.status(201).send("Tweet enviado com sucesso");
});

app.get("/tweets", (req, res) => {
  const lastTenTweets = tweets.slice(Math.max(tweets.length - 10, 0));

  const tweetsWithAvatar = lastTenTweets.map((tweet) => {
    const { username, tweet: tweetContent } = tweet;
    const user = users.find((user) => user.username === username);
    return { username, avatar: user.avatar, tweet: tweetContent };
  });

  res.json(tweetsWithAvatar);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
