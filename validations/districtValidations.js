const Joi = require("joi");

const validateDistrict = (district) => {
  const schema = Joi.object({
    name: Joi.string().min().required(),
    region_id: Joi.number().required(),
  });

  return schema.validate(district);
};
module.exports = { validateDistrict };
