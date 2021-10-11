const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateSignupInput(data) {
    let errors = {};

    data.username = validText(data.username) ? data.username : '';
    data.password = validText(data.password) ? data.password : '';
    data.password2 = validText(data.password2) ? data.password2 : '';

    if (!Validator.isLength(data.username, {min: 2, max: 30})) {
        errors.username = "Username must be between 2 and 30 characters";
    }

    if(Validator.isEmpty(data.username)) {
        errors.username = "Username field is required";
    }

    if(Validator.isempty(data.password)) {
        errors.password = "Password field is required";
    }

    if(!Validator.isLength(data.password, {min: 6, max: 30})) {
        errors.password = "Password must be at least 6 characters";
    }

    if(Validator.isempty(data.password2)) {
        errors.password2 = "Password field is required";
    }

    if(!Validator.equals(data.password, data.password2)){
        errors.password2 = "Passwords must match";
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}