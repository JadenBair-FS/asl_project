const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
const productRouter = require("./routes/Products");
app.set("views", __dirname + "/templates");
app.set("view engine", "twig");

app.get("/", (req, res) => {
  res.render("home", { name: "John", "users": [
    { name: "John", age: 20 },
    { name: "Jane", age: 21 },
    { name: "Janet", age: 22 },
  ] });
});

app.use("/products", productRouter);

app.listen(3000);
