const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Admin = require("./admin.model")(sequelize, Sequelize);
const Flat = require("./flat.model")(sequelize, Sequelize);
const Sector = require("./sector.model")(sequelize, Sequelize);
const Gender = require("./gender.model")(sequelize, Sequelize);
const Country = require("./country.model")(sequelize, Sequelize);

module.exports = { Admin, Flat, Sector, Gender, Country, sequelize };
