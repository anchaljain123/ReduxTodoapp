const Joi = require('joi');

const UserSchema = Joi.object().keys({
    username: Joi.string().required(),
    password:  Joi.string()
        .regex(/^(?=.*[a-z])(?=.*[A-Z]).{4,}$/).required()
});

exports.UserSchema = UserSchema;