"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.hasMany(models.Variant, { foreignKey: 'productId' });
    }
  }

  Product.init(
    {
      title: DataTypes.STRING,
      slug: DataTypes.STRING,
      price: DataTypes.FLOAT,
      description: DataTypes.TEXT("long"),
      is_published: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );

  return Product;
};