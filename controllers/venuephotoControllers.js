const { Venuephoto } = require("../models");
const { validateVenuephoto } = require("../validations/venuephotoValidation");

exports.createvenuephoto = async (req, res) => {
  const { error } = validatevenuephoto(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const venuephoto = await venuephoto.create(req.body);
    res.status(201).send(venuephoto);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getVenuephoto = async (req, res) => {
  try {
    const venuephotos = await Venuephoto.findAll();
    res.status(200).send(venuephotos);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getVenuephotoById = async (req, res) => {
  try {
    const venuephoto = await Venuephoto.findByPk(req.params.id);
    if (!venuephoto) return res.status(404).send("Venuephoto not found");
    res.status(200).send(venuephoto);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.updateVenuephoto = async (req, res) => {
  const { error } = validateVenuephoto(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const venuephoto = await Venuephoto.findByPk(req.params.id);
    if (!venuephoto) return res.status(404).send("Venuephoto not found");

    await venuephoto.update(req.body);
    res.status(200).send(venuephoto);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.deleteVenuephoto = async (req, res) => {
  try {
    const venuephoto = await Venuephoto.findByPk(req.params.id);
    if (!venuephoto) return res.status(400).send("Venuephoto not found");

    await venuephoto.destory();
    res.status(204).send();
  } catch (err) {
    res.status(500).send(err.message);
  }
};
