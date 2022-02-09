const { createError } = require('../utils/helpers');

class PassportErrorHandler {
  success(req, res, next) {
    next();
  }

  error(err, req, res, next) {
    // handle error
    createError(res, 'Unauthorized Request', {}, 401);
  }
}

const passportObj = new PassportErrorHandler();
module.exports = passportObj;
