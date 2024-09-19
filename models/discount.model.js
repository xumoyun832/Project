const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const Discount = sequelize.define("Discount", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    discount: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    finish_date: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  return Discount;
};
