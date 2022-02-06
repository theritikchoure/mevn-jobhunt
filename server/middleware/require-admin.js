const httpError = require('http-errors');

const requireAdmin = function (req, res, next) {
  console.log(req.user)
  if (req.user && req.user.role === "admin" && req.user.is_admin == 1) 
    return next();
  const err = new httpError(401);
  return next(err);
}

module.exports = requireAdmin;
