const { Payment } = require("../models");
const { validatePayment } = require("../validations/paymentValidation");

exports.createPayment = async (req, res) => {
  const { error } = validatePayment(req.body);
  if (error) return res.payment(400).send(error.details[0].message);

  try {
    const payment = await Payment.create(req.body);
    res.payment(201).send(payment);
  } catch (err) {
    res.payment(500).send(err.message);
  }
};

exports.getPayment = async (req, res) => {
  try {
    const payments = await Payment.findAll();
    res.payment(200).send(payments);
  } catch (err) {
    res.payment(500).send(err.message);
  }
};

exports.getPaymentById = async (req, res) => {
  try {
    const payment = await Payment.findByPk(req.params.id);
    if (!payment) return res.payment(404).send("Payment not found");
    res.payment(200).send(payment);
  } catch (err) {
    res.payment(500).send(err.message);
  }
};

exports.updatePayment = async (req, res) => {
  const { error } = validatePayment(req.body);
  if (error) return res.payment(400).send(error.details[0].message);

  try {
    const payment = await Payment.findByPk(req.params.id);
    if (!payment) return res.payment(404).send("Payment not found");

    await payment.update(req.body);
    res.payment(200).send(payment);
  } catch (err) {
    res.payment(500).send(err.message);
  }
};

exports.deletePayment = async (req, res) => {
  try {
    const payment = await Payment.findByPk(req.params.id);
    if (!payment) return res.payment(400).send("Payment not found");
    await payment.destroy();
    res.payment(204).send();
  } catch (err) {
    res.payment(500).send(err.message);
  }
};
