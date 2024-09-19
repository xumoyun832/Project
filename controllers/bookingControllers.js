const { Booking, Cart, Status } = require("../models");
const { validateBooking } = require("../validations/bookingValidation");

Booking.associate(sequelize.models);
Cart.associate(sequelize.models);
Status.associate(sequelize.models);

exports.createBooking = async (req, res) => {
  const { error } = validateBooking(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const booking = await Booking.create(req.body);
    res.status(201).send(booking);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getBooking = async (req, res) => {
  try {
    const bookings = await Booking.findAll();
    res.status(200).send(bookings);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findByPk(req.params.id, {
      include: [
        {
          model: Card,
          as: "cart",
        },
        {
          model: Status,
          as: "status",
        },
      ],
    });
    if (!booking) return res.status(404).send("Booking not found");
    res.status(200).send(booking);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.updateBooking = async (req, res) => {
  const { error } = validateBooking(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const booking = await Booking.findByPk(req.params.id);
    if (!booking) return res.status(404).send("Booking not found");

    await booking.update(req.dody);
    res.status(200).send(admin);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findByPk(req.params.id);
    if (!booking) return res.status(400).send("Booking not found");
    await booking.destroy();
    res.status(204).send();
  } catch (err) {
    res.status(500).send(err.message);
  }
};
