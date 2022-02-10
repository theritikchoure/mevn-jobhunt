const httpError = require('http-errors');

const employerAuth = function (req, res, next) {
  if (req.user && req.user.role === "employer" && req.user.is_active == 1) 
    return next();
  const err = new httpError(401);
  return next(err);
}

module.exports = employerAuth;