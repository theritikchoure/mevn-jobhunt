class ContactValidation {
  validate(object) {
    let errors = {}

    if(object.name === '') {
      errors.name = 'Name is required'
    }
    if(object.email === '') {
      errors.email = 'Email is required'
    } else { 
      const emailRegex = 
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      
      const email = emailRegex.test(object.email);
      if(!email) {
        errors.email = 'Invalid email address'
      }
    }
    if(object.subject === '') {
      errors.subject = 'Subject is required'
    }
    if(object.message === '') {
      errors.message = 'Message is required'
    }

    return errors;
  }
}

export default new ContactValidation();
