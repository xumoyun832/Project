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

  Region.associate = (models) => {
    Region.hasMany(models.District, {
      foreignKey: "region_id",
      as: "region",
    });
  };

  return Region;
};
