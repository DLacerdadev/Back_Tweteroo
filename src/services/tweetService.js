let tweets = [];

exports.createTweet = (username, tweet) => {
  return new Promise((resolve, reject) => {
    const newTweet = { username, tweet };
    tweets.push(newTweet);
    resolve();
  });
};

exports.getTweets = () => {
  return new Promise((resolve, reject) => {
    const lastTenTweets = tweets.slice(Math.max(tweets.length - 10, 0));
    resolve(lastTenTweets);
  });
};
