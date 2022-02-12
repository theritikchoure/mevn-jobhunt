const express = require('express');
const router = express.Router(); // init router
const passport = require('passport');
const PassportErrorHandler = require('../middleware/passportErrorResponse');
const ContactusController = require('../controller/contactus.controller');
const ContactusValidations = require('../validations/contactus.validation');
const EmployerAuth = require('../middleware/employerAuth.js');

/**
 * @route POST api/internships/
 * @description create new internship
 * @returns JSON
 * @access public
 */

router.post('/', ContactusValidations.create, (req, res) => {
  ContactusController.create(req, res);
});

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
      ContactusController.getAll(req, res);
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
    ContactusController.getByUrl(req, res);
  },
);

/**
 * @route PUT api/internships/:id
 * @description update an internship by id
 * @returns JSON
 * @access private
 */
router.put(
  '/:id',
  [
    passport.authenticate('jwt', { session: false, failWithError: true }),
    PassportErrorHandler.success,
    PassportErrorHandler.error,
    EmployerAuth,
    ContactusValidations.create
  ],
  (req, res) => {
    ContactusController.update(req, res);
  },
);

/**
 * @route DELETE api/internships/:id
 * @description delete an internship by id
 * @returns 
 * @access private
 */
router.delete(
  '/:id',
  [
    passport.authenticate('jwt', { session: false, failWithError: true }),
    PassportErrorHandler.success,
    PassportErrorHandler.error,
    EmployerAuth,
  ],
  (req, res) => {
    ContactusController.delete(req, res);
  },
);

module.exports = router;
