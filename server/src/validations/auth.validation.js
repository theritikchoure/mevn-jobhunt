const { isEmpty, isNumber } = require('../utils/validator');
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
  
  /**
   * @description Validate Employer's Profile Update
   */
  employer(req, res, next) {
    const errors = {};
    const { name, description, address, city, state, zip_code, mobile, email, website, linkedin, logo } = req.body;
    if (isEmpty(name)) {
      errors.name = 'Name is required';
    } 
    if (isEmpty(email)) {
      errors.email = 'Email is required';
    } 
    if (isEmpty(mobile)) {
      errors.mobile = 'Mobile is required';
    } 
    if (!isNumber(mobile)) {
      errors.mobile = 'Mobile must be number';
    }
    if (isEmpty(description)) {
      errors.description = 'Description is required';
    } 
    if(isEmpty(address)) {
      errors.address = 'Address is required';
    } 
    if (isEmpty(city)) {
      errors.city = 'City is required';
    } 
    if (isEmpty(state)) {
      errors.state = 'State is required';
    } 
    if (isEmpty(zip_code)) {
      errors.zip_code = 'Zip code is required';
    } 
    if (!isNumber(zip_code)) {
      errors.zip_code = 'Zip code must be number';
    }
    if (isEmpty(website)) {
      errors.website = 'Website is required';
    } 
    if (isEmpty(linkedin)) {
      errors.linkedin = 'Linkedin Url is required';
    } 
    if (isEmpty(logo)) {
      errors.logo = 'Logo is required';
    }

    if (Object.keys(errors).length > 0) {
      createValidationResponse(res, errors);
    } else {
      next();
    }
  }

  /**
   * @description Validate Change Password
   */
  password(req, res, next) {
    const errors = {};
    const { old_password, new_password, repeat_password } = req.body;

    if (isEmpty(old_password)) {
      errors.old_password = 'Old Password is required';
    }
    if (isEmpty(new_password)) {
      errors.new_password = 'New Password is required';
    }
    if(new_password !== repeat_password) {
      errors.password = 'New Password & Repeat Password does not match';
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
