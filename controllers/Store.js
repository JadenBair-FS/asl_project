const { Product, Variant, Image } = require("../models");

const index = async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [
        {
          model: Variant,
          include: [Image],
        },
      ],
    });

    res.render("views/store/index", { products });
  } catch (error) {
    console.error("Error retrieving products:", error);
    res.status(500).send("Internal Server Error");
  }
};

const show = async (req, res) => {
  const slug = req.params.slug;

  try {
    const product = await Product.findOne({
      where: { slug },
      include: [
        {
          model: Variant,
          include: [Image],
        },
      ],
    });

    if (!product) {
      return res.status(404).send("Product not found");
    }

    let variant = product.Variants[0]

    if (req.query.v) {
      variant = product.Variants.find(v => v.slug === req.query.v)
    }

    console.log(product.Variants[0].Images[0].id)

    res.render("views/store/show", { product, variant });
  } catch (error) {
    console.error("Error retrieving product:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = { index, show };
