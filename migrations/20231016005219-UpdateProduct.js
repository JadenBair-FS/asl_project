"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn("Products", "description", {
      type: Sequelize.TEXT("long"),
    });
    await queryInterface.addColumn("Products", "slug", {
      type: Sequelize.STRING,
      defaultValue: "",
      allowNull: false,
    });
    await queryInterface.addColumn("Products", "is_published", {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn("Variants", "description", {
      type: Sequelize.TEXT("long"),
    });
    await queryInterface.removeColumn("Variants", "slug", {
      type: Sequelize.STRING,
      defaultValue: "",
      allowNull: false,
    });
    await queryInterface.removeColumn("Variants", "inventory", {
      type: Sequelize.INTEGER,
      allowNull: false,
    });
  },
};
