// console.log("hello pookie");

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("start here ");
});

app.get("/jai", (req, res) => {
  res.send("jai shree ram");
});

app.get("/test", (req, res) => {
  res.send("tou toy toy");
});

app.listen(3000, () => {
  console.log(`server start at port number 3000`);
});
