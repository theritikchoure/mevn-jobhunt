const express = require('express');
// Init Router
const router = express.Router();
const passport = require('passport');
const PassportErrorHandler = require('../middleware/passportErrorResponse');
const AuthController = require('../controller/auth.controller');
const AuthValidations = require('../validations/auth.validation');
const EmployerAuth = require('../middleware/employerAuth.js');

/**
 * @route POST api/auth/signin
 * @description Sign in with phone and password
 * @returns JSON
 * @access public
 */
router.post('/login', AuthValidations.login, (req, res) => {
  AuthController.login(req, res);
});

/**
 * @route POST api/auth/signup
 * @description Sign up User
 * @returns JSON
 * @access public
 */
router.post('/register', AuthValidations.register, (req, res) => {
  AuthController.register(req, res);
});

/**
 * @route GET api/auth/secure
 * @description Get list of media for a project
 * @returns JSON
 * @access public
 */
router.get(
  '/secure',
  [
    passport.authenticate('jwt', { session: false, failWithError: true }),
    PassportErrorHandler.success,
    PassportErrorHandler.error,
  ],
  (req, res) => {
    return res.status(200).json({
      status: 'ok',
      message: 'Success',
      data: {},
    });
  },
);

/**
 * @route PUT api/auth/employer/profile-update
 * @description update employer's profile (loggedIn employer)
 * @returns JSON
 * @access private
 */
 router.put(
  '/employer/profile-update',
  [
    passport.authenticate('jwt', { session: false, failWithError: true }),
    PassportErrorHandler.success,
    PassportErrorHandler.error,
    EmployerAuth,
    AuthValidations.employer
  ],
  (req, res) => {
    AuthController.employerProfileUpdate(req, res);
  },
);

module.exports = router;
