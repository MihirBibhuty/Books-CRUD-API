// middleware/inputValidation.js

const Joi = require('joi');

exports.validateNewBook = (req, res, next) => {
    const schema = Joi.object({
        title: Joi.string().required(),
        author: Joi.string().required(),
        publish_date: Joi.string().allow('')
    });

    const { error } = schema.validate(req.body);

    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    next();
}

exports.validateUpdate = (req, res, next) => {
    // Joi schema for update validation
    next();
}