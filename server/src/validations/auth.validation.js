const { isEmpty } = require('../utils/validator');
const { createValidationResponse } = require('../utils/helpers');

class AuthenticationValidator {
  /**
   * @description Validate Sign in
   */
  login(req, res, next) {
    const errors = {};
    const { email, password, user_type, remember_me } = req.body;

    if (isEmpty(email)) {
      errors.email = 'Email is required';
    }
    if (isEmpty(password)) {
      errors.password = 'Password is required';
    }
    if (isEmpty(user_type)) {
      errors.user_type = 'User type is required';
    }

    if (Object.keys(errors).length > 0) {
      createValidationResponse(res, errors);
    } else {
      next();
    }
  }

  /**
   * @description Validate Sign in
   */
  register(req, res, next) {
    const errors = {};
    const { name, email, mobile, password, repeat_password, user_type } = req.body;
    if (isEmpty(name)) {
      errors.name = 'Name is required';
    } else if (isEmpty(email)) {
      errors.email = 'Email is required';
    } else if (isEmpty(mobile)) {
      errors.email = 'Mobile is required';
    } else if (isEmpty(password)) {
      errors.password = 'Password is required';
    } else if(password !== repeat_password){
      errors.password = 'Password doest not match with repeat_password';
    } else if (isEmpty(user_type)) {
      errors.role = 'User type is required';
    }

    if (Object.keys(errors).length > 0) {
      createValidationResponse(res, errors);
    } else {
      next();
    }
  }
}

const validationObj = new AuthenticationValidator();
module.exports = validationObj;
