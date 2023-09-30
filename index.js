const express = require("express");
const app = express();

// GET /products/all Headers being sent are: Page, Sort, Order

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

// GET /products/8719-small-red
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

//GET /products/8719

app.get("/products/:productId", (req, res) => {
  res.send("GET Products: " + req.params.productId);
});

app.listen(3000);
