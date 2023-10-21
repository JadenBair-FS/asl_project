const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
const fileUpload = require("express-fileupload");
app.use(fileUpload());
const productRouter = require("./routes/Products");
const variantRouter = require("./routes/Variants");
const imageRouter = require("./routes/Images");
const storeRouter = require("./routes/Store");

app.set("views", __dirname + "/templates");
app.set("view engine", "twig");

app.get("/", (req, res) => {
  res.render("views/store/index.twig");
});

app.use("/public", express.static("public"));
app.use("/products", productRouter);
app.use("/variants", variantRouter);
app.use("/images", imageRouter);
app.use("/store", storeRouter);

app.listen(3000);
