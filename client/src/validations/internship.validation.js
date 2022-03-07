// Custom Validators
const { isEmpty } = require('../helpers/validator/customValidation');

class InternshipValidation {
    validate(object) {
      let errors = {}
  
      if(isEmpty(object.title)) {
        errors.title = 'Title is required'
      }
      
      if(isEmpty(object.description)) {
        errors.description = 'Description is required'
      }
      
      if(isEmpty(object.category)) {
        errors.category = 'Category is required'
      }

      if(object.is_paid === 1 && isEmpty(object.salary)) {
        errors.salary = 'Salary is required'
      }
      
      if(isEmpty(object.qualification)) {
        errors.qualification = 'Qualification is required'
      }
      
      if(isEmpty(object.no_of_openings)) {
        errors.no_of_openings = 'No of Openings is required'
      }
      
      if(isEmpty(object.duration)) {
        errors.duration = 'Duration is required'
      }
      
      if(isEmpty(object.last_date)) {
        errors.last_date = 'Last Date is required'
      }
  
      return errors;
    }
  }
  
  export default new InternshipValidation();
  