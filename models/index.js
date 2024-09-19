const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Admin = require("./admin.model")(sequelize, Sequelize);
const Flat = require("./flat.model")(sequelize, Sequelize);
const Sector = require("./sector.model")(sequelize, Sequelize);
const Gender = require("./gender.model")(sequelize, Sequelize);
const Country = require("./country.model")(sequelize, Sequelize);
const Ticket = require("./ticket.model")(sequelize, Sequelize);
const Delivery = require("./delivery.model")(sequelize, Sequelize);
const District = require("./district.model")(sequelize, Sequelize);
const Cart = require("./cart.model")(sequelize, Sequelize);
const Status = require("./status.model")(sequelize, Sequelize);
const Region = require("./region.model")(sequelize, Sequelize);
const Language = require("./language.model")(sequelize, Sequelize);
const Seat = require("./seat.model")(sequelize, Sequelize);
const Tickettype = require("./tickettype.model")(sequelize, Sequelize);
const Discount = require("./discount.model")(sequelize, Sequelize);
const Payment = require("./payment.model")(sequelize, Sequelize);

module.exports = {
  Admin,
  Flat,
  Sector,
  Gender,
  Country,
  Ticket,
  Delivery,
  District,
  Cart,
  Status,
  Region,
  Language,
  Seat,
  Tickettype,
  Discount,
  Payment,
  sequelize,
};
