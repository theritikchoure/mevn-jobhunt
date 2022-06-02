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

  register(object) {
    let error;

    if(isEmpty(object.name)) {
      error = 'Name is required';
      return error;
    }
    
    if(isEmpty(object.email)) {
      error = 'Email is required';
      return error;
    } else {
      const emailRegex =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      const email = emailRegex.test(object.email);
      if (!email) {
        error = "Invalid email address";
        return error;
      }
    }
    
    if(isEmpty(object.mobile)) {
      error = 'Mobile is required';
      return error;
    } else {
      const mobileRegex = /^[0-9]{10}$/;

      const mobile = mobileRegex.test(object.mobile);
      if (!mobile) {
        error = "Mobile must be 10 digits";
        return error;
      }
    }

    if(isEmpty(object.password)) {
      error = 'Password is required';
      return error;
    } else {
      // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})$/
      // const password = passwordRegex.test(object.password);

      if(object.password.length < 8) {
        error = 'Password must be 8 characters long';
        return error;
      }

    }
    
    if(isEmpty(object.repeat_password)) {
      error = 'Repeat password is required';
      return error;
    }
    
    if(object.password !== object.repeat_password) {
      error = 'Your password and repeat password are not the same';
      return error;
    }

    if(isEmpty(object.user_type)) {
      error = 'User Type is required';
      return error;
    }

  }
}

export default new AuthValidation();
