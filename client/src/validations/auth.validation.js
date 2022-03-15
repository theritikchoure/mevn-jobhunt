// Custom Validators
const { isEmpty } = require('../helpers/validator/customValidation');

class AuthValidation {
  login(object) {
    let errors;

    if(isEmpty(object.email)) {
        errors = 'Email is required';
        return errors;
    } else {
      const emailRegex =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      const email = emailRegex.test(object.email);
      if (!email) {
        errors = "Invalid email address";
        return errors;
      }
    }

    if(isEmpty(object.password)) {
        errors = 'Password is required';
        return errors;
    }
    
    if(isEmpty(object.user_type)) {
        errors = 'User Type is required';
        return errors;
    }

  }
}

export default new AuthValidation();
