const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const Delivery = sequelize.define("Delivery", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  return Delivery;
};
