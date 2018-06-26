const express = require("express");
const app = express();
const myport = 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.listen(myport, () => console.log(`Now listening on port ${myport}`));

// Database Setup
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/bulletinboard");
mongoose.connection.on("error", console.error.bind(console), "MDB Connect Err");
mongoose.Promise = global.Promise;

const Comment = require("./models/comment");
// const Populate = require("./models/Populate");
// Populate.setupComments();
// mongoose.connection.dropDatabase();

// Routes
app.get("/api/comment/", (req, res) => {
  let { offset, sort } = req.query;

  Comment.find()
    .sort({ createdAt: sort })
    .limit(4)
    .skip(+offset)
    .then(result => {
      res.json(result);
    });
});

app.post("/api/comment/new/", (req, res) => {

  let { title, body, avatar, name } = req.body;

  Comment.new(title, body, avatar, name)
    .then(result => res.json(result));
});
