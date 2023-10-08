const Products = require("../models/Products");

const index = (req, res) => {
  const products = Products.all();
  res.render("views/products/index.twig", { products });
};

const form = (req, res) => {
  // res.send("Products.form")
  if (req.params.id) {
    const product = Products.find(req.params.id);
    res.render("views/products/edit", { product });
  } else {
    res.render("views/products/create");
  }
};

const show = (req, res) => {
  const product = Products.find(req.params.id);
  res.render("views/products/show.twig", { product });
};

const create = (req, res) => {
  const product = Products.create(req.body);
    res.redirect("/products/" + product.id);
};

const update = (req, res) => {
  const product = Products.update(req.params.id, req.body);
  res.redirect("/products/" + req.params.id);
};

const destroy = (req, res) => {
  const product = Products.remove(req.params.id);
  const products = Products.all();
  res.render("views/products/index.twig", { products });
};

module.exports = { index, form, show, create, update, destroy };
