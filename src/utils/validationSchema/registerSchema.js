const Joi = require('joi');

const registerSchema = Joi.object({
    first_name: Joi.string().min(1).required(),
    last_name: Joi.string().min(1).optional(),
    password: Joi.string().required(),
});

module.exports = registerSchema;