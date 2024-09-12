const express = require("express");
const dotenv = require("dotenv");
const { sequelize } = require("./models");
const setupSwagger = require("./swagger/swagger");
const adminRoutes = require("./routes/adminRoutes");
const flatRoutes = require("./routes/flatRoutes");
const sectorRoutes = require("./routes/sectorRoutes");
const genderRoutes = require("./routes/genderRoutes");
const countryRoutes = require("./routes/countryRoutes");
// const venuephotoRoutes = require("./routes/venueRoutes");

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api", adminRoutes);
app.use("/api", flatRoutes);
app.use("/api", sectorRoutes);
app.use("/api", genderRoutes);
app.use("/api", countryRoutes);
// app.use("/api", venuephotoRoutes);

setupSwagger(app);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
