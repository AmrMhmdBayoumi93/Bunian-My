// require Joi
const Joi = require("joi");

//Joi Schema
const joiSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(30).required()
});

// export
module.exports = joiSchema;

