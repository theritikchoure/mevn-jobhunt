const express = require('express');
// Init Router
const router = express.Router();
const passport = require('passport');
const PassportErrorHandler = require('../middleware/passportErrorResponse');
const InternshipController = require('../controller/internship.controller');
const StudentController = require('../controller/student.controller');
const EmployerController = require('../controller/employer.controller')
const EmployerAuth = require('../middleware/employerAuth.js');

/**
 * @route GET api/employers/:url
 * @description profile of employer associated with url
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
    EmployerController.getByURL(req, res);
  },
);

/**
 * @route GET api/employers/application/:id
 * @description get all applications of an intersnhip
 * @returns JSON
 * @access private
 */
 router.get(
  '/applications/:id',
  [
    passport.authenticate('jwt', { session: false, failWithError: true }),
    PassportErrorHandler.success,
    PassportErrorHandler.error,
    EmployerAuth
  ],
  (req, res) => {
    InternshipController.allApplicationOfAnInternship(req, res);
  },
);

/**
 * @route GET api/employers/applicant/:id
 * @description profile of applicant
 * @returns JSON
 * @access private
 */
 router.get(
  '/applicant/:id',
  [
    passport.authenticate('jwt', { session: false, failWithError: true }),
    PassportErrorHandler.success,
    PassportErrorHandler.error,
    EmployerAuth
  ],
  (req, res) => {
    StudentController.getByID(req, res);
  },
);

/**
 * @route GET api/employers/applied-internship
 * @description get loggedIn student's applied internship
 * @returns JSON
 * @access private
 */
 router.put(
  '/shortlist/:id/:url',
  [
    passport.authenticate('jwt', { session: false, failWithError: true }),
    PassportErrorHandler.success,
    PassportErrorHandler.error,
    EmployerAuth
  ],
  (req, res) => {
    InternshipController.shortlistStudent(req, res);
  },
);

module.exports = router;