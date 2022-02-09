const isJSON = require('validator/lib/isJSON');
const isLength = require('validator/lib/isLength');
const isInt = require('validator/lib/isInt');
const matches = require('validator/lib/matches');
const isNumeric = require('validator/lib/isNumeric');
const isIn = require('validator/lib/isIn');
const isURL = require('validator/lib/isURL');
const isAlphanumeric = require('validator/lib/isAlphanumeric');
// Custom Validators
const {
  isEmpty,
  isValidString,
  customRegex,
  isEmail,
  isArray,
  isDecimalNumber,
  isNumber,
  isBoolean,
  isValidDate,
  isString,
  isValidId,
} = require('./customValidations');

module.exports = {
  isJSON,
  isLength,
  isInt,
  matches,
  isNumeric,
  isIn,
  isURL,
  isAlphanumeric,
  // Custom Validations
  isEmpty,
  isValidString,
  customRegex,
  isEmail,
  isArray,
  isDecimalNumber,
  isNumber,
  isBoolean,
  isValidDate,
  isString,
  isValidId,
};
