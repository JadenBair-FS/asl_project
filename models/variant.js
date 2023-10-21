"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Variant extends Model {
    static associate(models) {
      Variant.belongsTo(models.Product, { foreignKey: 'productId' });
      Variant.hasMany(models.Image, { foreignKey: 'variantId' });
    }
  }

  Variant.init(
    {
      title: DataTypes.STRING,
      price: DataTypes.FLOAT,
      description: DataTypes.TEXT("long"),
      slug: DataTypes.STRING,
      inventory: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Variant",
    }
  );

  return Variant;
};
