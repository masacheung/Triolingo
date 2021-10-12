const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateCardInput(data) {
    let errors = {};

    data.title = validText(data.title) ? data.title : '';

    if (!Validator.isLength(data.title, { min: 1, max: 140})) {
        errors.title = 'Card title must be at least 1 characters long'
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}