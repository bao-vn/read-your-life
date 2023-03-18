import express from "express";
var cors = require('cors')
const app = express();
const { connection } = require('./connect');

const port = 3000;

app.use(cors());

app
  .get("/", (req, res) => {
    res.send({
      message: "Hello, World!",
    });
  })
  .get("/random", (req, res) => {
    res.send({
      number: Math.floor(Math.random() * 100),
    });
  })
  .get("/info", (req, res) => {
    res.send({
      number: Math.floor(Math.random() * 100),
    });
  });

app.listen(port, () => {
  console.log(`Application listening on port ${port}`);
});