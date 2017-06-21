const joiValidation = require('../configuration/joiValidation');
const Joi = require('joi');

exports.validatePassword = (req, res, next) => {
  const result = Joi.validate(req.body, joiValidation.UserSchema);
  if (result.error === null) {
    next();
  } else {
    next(new Error('Invalid Username or Password'))
  }
};