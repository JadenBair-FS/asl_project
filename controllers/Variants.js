const { Variant, Product } = require("../models");

const index = async (req, res) => {
  const variants = await Variant.findAll();
  res.render("views/variants/index.twig", { variants });
  // res.json(vairants);
};

const form = async (req, res) => {
  // res.send("Variants.form")
  const products = await Product.findAll();
  if (req.params.id) {
    const variant = await Variant.findByPk(req.params.id);
    res.render("views/variants/edit", { variant, products });
  } else {
    res.render("views/variants/create", { products });
  }
};

const show = async (req, res) => {
  const variant = await Variant.findByPk(req.params.id);
  console.log('Variant:', variant);
  
  if (variant) {
    const product = await variant.getProduct();
    console.log('Product:', product);
    res.render("views/variants/show.twig", { variant, product });
  } else {
    res.status(404).send('Variant not found');
  }
};

const create = async (req, res) => {
  const variant = await Variant.create(req.body);
  // res.json(product);
  res.redirect("/variants/" + variant.id);
};

const update = async (req, res) => {
  const variant = await Variant.update(req.body, {
    where: { id: req.params.id },
  });
  res.redirect("/variants/" + req.params.id);
};

const destroy = async (req, res) => {
  const variant = await Variant.destroy({ where: { id: req.params.id } });
  // const products = Product.findAll();
  res.redirect("/variants");
};

module.exports = { index, form, show, create, update, destroy };
