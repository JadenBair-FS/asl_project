const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`Home Page!  GET...`);
});

app.post("/", (req, res) => {
  res.send(`Home Page! POST...`);
});

app.get("/products/:productId-:productName", (req, res) => {
  res.send(
    "Product Page! Product name: " +
      req.params.productName +
      " Product ID: " +
      req.params.productId
  );
});

app.get("/products/:productName", (req, res) => {
  res.send("Product Page! Product name: " + req.params.productName);
});

app.listen(3000);
