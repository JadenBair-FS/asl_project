const express = require("express");
const app = express();

app.get("/products/all", (req, res) => {
  res.send(
    "GET Products: " +
      req.headers.page +
      ", " +
      req.headers.sort +
      ", " +
      req.headers.order
  );
});

app.get("/products/:productId-:productSize-:productColor", (req, res) => {
  res.send(
    "GET Products:  " +
      req.params.productId +
      ", " +
      req.params.productSize +
      ", " +
      req.params.productColor
  );
});

app.get("/products/:productId", (req, res) => {
  res.send("GET Products: " + req.params.productId);
});

app.listen(3000);
