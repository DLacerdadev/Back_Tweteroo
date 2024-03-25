const tweetService = require("../services/tweetService");

exports.createTweet = (req, res, next) => {
  const { username, tweet } = req.body;

  tweetService
    .createTweet(username, tweet)
    .then(() => res.status(201).send("Tweet enviado com sucesso"))
    .catch(next);
};

exports.getTweets = (req, res, next) => {
  tweetService
    .getTweets()
    .then((tweets) => res.json(tweets))
    .catch(next);
};
