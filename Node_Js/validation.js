const joi = require("joi");

const registerValidation = (data) => {
  const Schema = joi.object({
    name: joi.string().required().min(2).max(10),
    email: joi.string().required().email(),
    mobile: joi.number().integer().min(1000000000).max(9999999999).required(),
    password: joi.string().required().min(8).max(15),
  });
  return Schema.validate(data);
};

const loginValidation = (data) => {
  const Schema = joi.object({
    email: joi.string().required().email(),
    password: joi.string().required().min(8).max(15),
  });
  return Schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation=loginValidation;


