const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const Region = sequelize.define("Region", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    postpone: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });

  return Region;
};
