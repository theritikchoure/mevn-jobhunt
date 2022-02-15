const express = require('express');
// Init Router
const router = express.Router();
const passport = require('passport');
const PassportErrorHandler = require('../middleware/passportErrorResponse');
const CategoryController = require('../controller/category.controller');
const CategoryValidations = require('../validations/category.validation');
const EmployerAuth = require('../middleware/employerAuth.js');

/**
 * @route POST api/categorys/
 * @description create new category
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
      CategoryValidations.create
    ],
    (req, res) => {
      CategoryController.create(req, res);
    },
);

/**
 * @route GET api/categorys/
 * @description get all categorys
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
      CategoryController.getAll(req, res);
    },
);

/**
 * @route GET api/categorys/:url
 * @description Get an category by url
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
    CategoryController.getByUrl(req, res);
  },
);

/**
 * @route PUT api/categorys/:id
 * @description update an category by id
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
    CategoryValidations.create
  ],
  (req, res) => {
    CategoryController.update(req, res);
  },
);

/**
 * @route DELETE api/categorys/:id
 * @description delete an category by id
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
    CategoryController.delete(req, res);
  },
);

module.exports = router;
