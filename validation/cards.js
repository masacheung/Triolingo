const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateCardInput(data) {
    let errors = {};

    data.title = validText(data.title) ? data.title : '';
    data.definition = validText(data.definition) ? data.definition : '';
    data.category = validText(data.category) ? data.category : '';
    // data.synonyms = validText(data.synonyms) ? data.synonyms : '';
    // data.audio = validText(data.audio) ? data.audio : '';
    // data.notes = validText(data.notes) ? data.notes : '';

    if (!Validator.isLength(data.title, { min: 2, max: 140})) {
        errors.title = 'Card title must be at least 2 characters long'
    }

    if (Validator.isEmpty(data.title)) {
        errors.title = 'Title field is required'
    }

    // if (!Validator.isAlphanumeric(data.title)) {
    //     errors.title = 'Title cannot contain a special character (i.e. !?=~...)'
    // }
    
    if (Validator.isEmpty(data.definition)) {
        errors.definition = 'Definition field is required'
    }

    // if (Validator.isEmpty(data.category)) {
    //     errors.category = 'Category field is required'
    // }


    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}