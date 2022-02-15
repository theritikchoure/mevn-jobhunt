const { isEmpty } = require('../utils/validator');
const { createValidationResponse } = require('../utils/helpers');

class CategoryValidator {
  /**
   * @description Validate Create
   */
  create(req, res, next) {
    const errors = {};
    const { title, description } = req.body;

    if (isEmpty(title)) {
      errors.title = 'Title is required';
    }
    if (isEmpty(description)) {
      errors.description = 'Description is required';
    }

    if (Object.keys(errors).length > 0) {
      createValidationResponse(res, errors);
    } else {
      next();
    }
  }


}

const validationObj = new CategoryValidator();
module.exports = validationObj;
