const { createError } = require('../utils/helpers');
const constants = require('../config/constants');

class Authorization {
  async authenticateSuperAdmin(req, res, next) {
    try {
      const userDetails = req.user;
      if (constants.ADMIN_EMAILS.indexOf(userDetails.email) !== -1) {
        next();
      } else {
        createError(res, 'Unauthorized access', {}, 401);
      }
    } catch (e) {
      createError(res, e);
    }
  }
}

const authorizationObj = new Authorization();
module.exports = authorizationObj;
