const express = require("express");
const app = express();
const port = 3000;

app.get("/", function (req, res) {
  res.send("Yay Node!");
});

app.get("/chocolate", function (req, res) {
  res.send("Mm chocolate :O");
});

app.listen(3000, function () {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});