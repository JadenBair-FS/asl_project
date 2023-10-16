const { Product } = require("../models");

const index = async (req, res) => {
  const products = await Product.findAll();
  res.render("views/products/index.twig", { products });
  // res.json(products);
};

const form = async (req, res) => {
  // res.send("Products.form")
  if (req.params.id) {
    const product = await Product.findByPk(req.params.id);
    res.render("views/products/edit", { product });
  } else {
    res.render("views/products/create");
  }
};

const show = async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  const variants = await product.getVariants();
  res.render("views/products/show.twig", { product, variants });
};

const create = async (req, res) => {
  const product = await Product.create(req.body);
  // res.json(product);
  res.redirect("/products/" + product.id);
};

const update = async (req, res) => {
  const product = await Product.update(req.body, {
    where: { id: req.params.id },
  });
  res.redirect("/products/" + req.params.id);
};

const destroy = async (req, res) => {
  const product = await Product.destroy({ where: { id: req.params.id } });
  // const products = Product.findAll();
  res.redirect("/products");
};

module.exports = { index, form, show, create, update, destroy };
