const express = require("express");
const router = express.Router();
const tweetController = require("../controllers/tweetController");

router.post("/tweets", tweetController.createTweet);
router.get("/tweets", tweetController.getTweets);

module.exports = router;
