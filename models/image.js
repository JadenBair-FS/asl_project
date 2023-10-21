"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    static associate(models) {
      Image.belongsTo(models.Variant, { foreignKey: 'variantId' });
    }
  }

  Image.init(
    {
      extension: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Image",
    }
  );

  return Image;
};
