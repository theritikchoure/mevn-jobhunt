const { isEmpty, isNumber} = require('../utils/validator');
const { createValidationResponse } = require('../utils/helpers');

class InternshipValidator {
  /**
   * @description Validate Create
   */
  create(req, res, next) {
    const errors = {};
    const { title, description, category, is_paid, salary, no_of_openings, duration, last_date, status } = req.body;

    if (isEmpty(title)) {
      errors.title = 'Title is required';
    }
    if (isEmpty(description)) {
      errors.description = 'Description is required';
    }
    if (isEmpty(category)) {
      errors.category = 'Category is required';
    }
    if (isEmpty(is_paid)) {
      errors.is_paid = 'Paid/Unpaid is required';
    }
    if (is_paid === 1 && isEmpty(salary)) {
      errors.salary = 'Salary is required';
    }
    if (isEmpty(no_of_openings)) {
      errors.no_of_openings = 'No of Openings is required';
    }
    if(!isNumber(no_of_openings)) {
      errors.no_of_openings = 'No of Openings should be number';
    }
    if (isEmpty(duration)) {
      errors.duration = 'Duration is required';
    }
    if (isEmpty(last_date)) {
      errors.last_date = 'Last Date is required';
    }
    if (isEmpty(status)) {
      errors.status = 'Status is required';
    }

    if (Object.keys(errors).length > 0) {
      createValidationResponse(res, errors);
    } else {
      next();
    }
  }


}

const validationObj = new InternshipValidator();
module.exports = validationObj;
