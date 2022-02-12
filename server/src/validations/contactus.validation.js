const { isEmpty } = require('../utils/validator');
const { createValidationResponse } = require('../utils/helpers');

class ContactusValidator {
  /**
   * @description Validate Create
   */
  create(req, res, next) {
    const errors = {};
    const { name, email, subject, message } = req.body;

    if (isEmpty(name)) {
      errors.name = 'Name is required';
    }
    if (isEmpty(email)) {
      errors.email = 'Email is required';
    }
    if (isEmpty(subject)) {
      errors.subject = 'Subject is required';
    }
    if (isEmpty(message)) {
      errors.message = 'Message is required';
    }

    if (Object.keys(errors).length > 0) {
      createValidationResponse(res, errors);
    } else {
      next();
    }
  }


}

const validationObj = new ContactusValidator();
module.exports = validationObj;
