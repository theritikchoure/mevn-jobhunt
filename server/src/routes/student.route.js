const express = require('express');
// Init Router
const router = express.Router();
const passport = require('passport');
const PassportErrorHandler = require('../middleware/passportErrorResponse');
const InternshipController = require('../controller/internship.controller');
const StudentController = require('../controller/student.controller');
const StudentAuth = require('../middleware/studentAuth.js');

/**
 * @route GET api/students/applied-internship
 * @description get loggedIn student's applied internship
 * @returns JSON
 * @access private
 */
 router.get(
  '/applied-internships',
  [
    passport.authenticate('jwt', { session: false, failWithError: true }),
    PassportErrorHandler.success,
    PassportErrorHandler.error,
    StudentAuth
  ],
  (req, res) => {
    StudentController.appliedJobs(req, res);
  },
);

/**
 * @route GET api/students/shortlisted-internship
 * @description get loggedIn student's shortlisted internship
 * @returns JSON
 * @access private
 */
 router.get(
  '/shortlisted-internships',
  [
    passport.authenticate('jwt', { session: false, failWithError: true }),
    PassportErrorHandler.success,
    PassportErrorHandler.error,
    StudentAuth
  ],
  (req, res) => {
    StudentController.shortListedInternships(req, res);
  },
);

module.exports = router;
