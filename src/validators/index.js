const Joi = require('joi');
const productValidator = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    price: Joi.number().min(0).max(1000000).required(),
    description: Joi.string().min(3).max(255).optional()
})

const shopValidator = Joi.object({
    name: Joi.string().min(6).max(30).required(),
    owner: Joi.object({
        name: Joi.string().min(6).max(30).required()
    }).optional(),
    products: Joi.array().items(productValidator).max(5).optional()
});

module.exports = Object.freeze({
    shopValidator,
    productValidator
});