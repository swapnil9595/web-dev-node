// let tweets = require("../data/tweets.json");
const dao = require("../db/tweets/tweet-dao");

module.exports = (app) => {
  const findAllTweets = (req, res) =>
    dao.findAllTweets().then((tweets) => res.json(tweets));

  const postNewTweet = (req, res) => {
    const newTweet = {
      _id: new Date().getTime() + "",
      topic: "Web Development",
      userName: "ReactJS",
      verified: false,
      handle: "ReactJS",
      time: "2h",
      "avatar-image": "../../../images/react.png",
      "logo-image": "../../../images/react.png",
      stats: {
        comments: 123,
        retweets: 234,
        likes: 345,
      },
      ...req.body,
    };
    tweets = [newTweet, ...tweets];
    dao.postNewTweet().then((tweets) => res.json(tweets));
  };
  const deleteTweet = (req, res) => {
    const id = req.params["id"];
    tweets = tweets.filter((tweet) => tweet._id !== id);
    dao.deleteTweet().then((tweets) => res.json(tweets));
    res.sendStatus(200);
  };
  const likeTweet = (req, res) => {
    const id = req.params["id"];
    tweets = tweets.map((tweet) => {
      if (tweet._id === id) {
        if (tweet.liked === true) {
          tweet.liked = false;
          tweet.stats.likes--;
        } else {
          tweet.liked = true;
          tweet.stats.likes++;
        }
        return tweet;
      } else {
        return tweet;
      }
    });
    dao.likeTweet().then((tweets) => res.json(tweets));
    res.sendStatus(200);
  };

  app.put("/api/tweets/:id/like", likeTweet);
  app.delete("/api/tweets/:id", deleteTweet);
  app.post("/api/tweets", postNewTweet);
  app.get("/api/tweets", findAllTweets);
};
