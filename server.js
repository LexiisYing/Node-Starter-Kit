const express = require("express");
const app = express();
const port = 3000;

app.get("/", function (req, res) {
    let searchQuery = req.query.search;
  res.send("Yay Node!" + searchQuery);
});

app.get("/chocolate", function (req, res) {
    let searchQuery = req.query.amount;
    res.send("Mm chocolate :O, you have " + searchQuery);
});

app.get("/json", function (req, res) {
  let lat = req.query.lat;
  let lng = req.query.lng;
  res.send(`You searched for Lat: ${lat} and Lng: ${lng}`);
});

app.get("/multiply", function (req, res) {
  let value1 = req.query.value1;
  let value2 = req.query.value2;
  res.send(`multiplied value is ${value1 * value2}`);
});

app.listen(3000, function () {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});