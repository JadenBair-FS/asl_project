const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
const productRouter = require("./routes/Products");
const variantRouter = require("./routes/Variants");
const imageRouter = require("./routes/Images");
app.set("views", __dirname + "/templates");
app.set("view engine", "twig");

app.get("/", (req, res) => {
  res.render("views/home");
});

app.use("/products", productRouter);
app.use("/variants", variantRouter);
app.use("/images", imageRouter);


app.listen(3000);
