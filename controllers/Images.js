const { Image, Variant } = require("../models");

const index = async (req, res) => {
  const images = await Image.findAll();
  res.render("views/images/index.twig", { images });
  // res.json(products);
};

const form = async (req, res) => {
  // res.send("Products.form")
  const variants = await Variant.findAll();
  if (req.params.id) {
    const image = await Image.findByPk(req.params.id);
    res.render("views/images/edit", { image, variants });
  } else {
    res.render("views/images/create", { variants });
  }
};

const show = async (req, res) => {
  const image = await Image.findByPk(req.params.id);
  console.log("Image:", image);

  if (image) {
    const variant = await image.getVariant();
    console.log("Variant:", variant);
    res.render("views/images/show.twig", { image, variant });
  } else {
    res.status(404).send("Image not found");
  }
};

const create = async (req, res, next) => {
  const image = await Image.create(req.body);
  req.imageId = image.id;
  next();
  // res.json(product);
  res.redirect("/images/" + image.id);
};

const update = async (req, res, next) => {
  const image = await Image.update(req.body, {
    where: { id: req.params.id },
  });
  req.imageId = req.params.id;
  next();
  res.redirect("/images/" + req.params.id);
};

const destroy = async (req, res) => {
  const image = await Image.destroy({ where: { id: req.params.id } });
  // const products = Product.findAll();
  res.redirect("/images");
};

module.exports = { index, form, show, create, update, destroy };
