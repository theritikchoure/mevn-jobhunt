const express = require('express');
// Init Router
const router = express.Router();
const passport = require('passport');
const PassportErrorHandler = require('../middleware/passportErrorResponse');
const InternshipController = require('../controller/internship.controller');
const InternshipValidations = require('../validations/internship.validation');
const EmployerAuth = require('../middleware/employerAuth.js');
const StudentAuth = require('../middleware/studentAuth.js');

/**
 * @route POST api/internships/
 * @description create new internship
 * @returns JSON
 * @access private
 */

router.post(
    '/',
    [
      passport.authenticate('jwt', { session: false, failWithError: true }),
      PassportErrorHandler.success,
      PassportErrorHandler.error,
      EmployerAuth,
      InternshipValidations.create
    ],
    (req, res) => {
      InternshipController.create(req, res);
    },
);

/**
 * @route GET api/internships/
 * @description get all internships
 * @returns JSON
 * @access private
 */
 router.get(
    '/',
    [
      passport.authenticate('jwt', { session: false, failWithError: true }),
      PassportErrorHandler.success,
      PassportErrorHandler.error,
    ],
    (req, res) => {
      InternshipController.getAll(req, res);
    },
);

/**
 * @route GET api/internships/:url
 * @description Get an internship by url
 * @returns JSON
 * @access private
 */
router.get(
  '/:url',
  [
    passport.authenticate('jwt', { session: false, failWithError: true }),
    PassportErrorHandler.success,
    PassportErrorHandler.error,
  ],
  (req, res) => {
    InternshipController.getByUrl(req, res);
  },
);

/**
 * @route PUT api/internships/:id
 * @description update an internship by id
 * @returns JSON
 * @access private
 */
router.put(
  '/:url',
  [
    passport.authenticate('jwt', { session: false, failWithError: true }),
    PassportErrorHandler.success,
    PassportErrorHandler.error,
    EmployerAuth,
    InternshipValidations.create
  ],
  (req, res) => {
    InternshipController.update(req, res);
  },
);

/**
 * @route DELETE api/internships/:url
 * @description delete an internship by url
 * @returns 
 * @access private
 */
router.delete(
  '/:url',
  [
    passport.authenticate('jwt', { session: false, failWithError: true }),
    PassportErrorHandler.success,
    PassportErrorHandler.error,
    EmployerAuth,
  ],
  (req, res) => {
    InternshipController.delete(req, res);
  },
);

/**
 * @route PUT api/internships/status/:url
 * @description delete an internship by url
 * @returns 
 * @access private
 */
router.put(
  '/status/:url',
  [
    passport.authenticate('jwt', { session: false, failWithError: true }),
    PassportErrorHandler.success,
    PassportErrorHandler.error,
    EmployerAuth,
  ],
  (req, res) => {
    InternshipController.updateStatus(req, res);
  },
);


/**
 * @route PUT api/internships/apply/:url
 * @description delete an internship by url
 * @returns 
 * @access private
 */
router.put(
  '/apply/:url',
  [
    passport.authenticate('jwt', { session: false, failWithError: true }),
    PassportErrorHandler.success,
    PassportErrorHandler.error,
    StudentAuth
  ],
  (req, res) => {
    InternshipController.applyToInternship(req, res);
  },
);

/**
 * @route PUT api/internships/like/:url
 * @description delete an internship by url
 * @returns 
 * @access private
 */
router.put(
  '/like/:url',
  [
    passport.authenticate('jwt', { session: false, failWithError: true }),
    PassportErrorHandler.success,
    PassportErrorHandler.error,
    StudentAuth
  ],
  (req, res) => {
    InternshipController.likeUnlikeToInternship(req, res);
  },
);

module.exports = router;
