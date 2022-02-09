const bCrypt = require('bcrypt-nodejs');
const _ = require('lodash');
const { isEmpty, isString } = require('../validator');

/**
 * @param {Object} res
 * @param {String} status ok | error
 * @param {String} msg Response message
 * @param {Object|Array} payload Array or Object
 * @param {Object} other This can be other object that user wants to add
 */
exports.createResponse = (res, status, msg, payload, other = undefined, statusCode = 200) => {
  return res.status(statusCode).json({
    status,
    message: msg,
    data: payload,
    ...other,
  });
};

/**
 * @param {Object} res
 * @param {Object} error
 * @param {Object} options
 */
exports.createError = (res, error, options = undefined, statusCode = 400) => {
  if (!options) options = {};
  if (!options.other) options.other = {};

  const message = (error && error.message) || (isString(error) && error) || options.message || 'Error Occurred';
  const stackTrace = error || message;

  console.error('ERROR:', message, stackTrace);

  res.locals.errorStr = message;

  const other = {
    ...options.other,
    ...(options.returnStackTrace ? { error: error.message } : {}),
  };

  return exports.createResponse(res, 'error', message, other, undefined, statusCode);
};

/**
 * @param {Object} res
 * @param {String} message
 * @param {Object} options
 */
exports.createServiceUnavailableError = (res, message, options = undefined) => {
  if (!options) options = {};
  if (!options.other) options.other = {};

  console.error('Service unavailable error:', message);

  return res.status(503).json({
    status: 'error',
    message,
    ...options.other,
  });
};

/**
 * @param {Object} res
 * @param {Object} errors
 */
exports.createValidationResponse = (res, errors) => {
  return res.status(400).json({
    status: 'error',
    message: errors[Object.keys(errors)[0]],
    errors: {
      ...errors,
    },
  });
};

/**
 * @description Generate Hashed password
 * @param {String} password
 */
exports.generateHash = (password) => {
  return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
};

/**
 * @descs Compare encrypted passwords
 * @param {*} userpass
 * @param {*} password
 */
exports.comparePassword = (password, DbPassword) => {
  return bCrypt.compareSync(password, DbPassword);
};

/**
 * @description Get Array From String
 * @param {String} str
 */
exports.arrayFromString = (str) => {
  const newStr = str.slice(2, str.length - 2);
  const replacedStr = newStr.replace(/“|”|"/g, '');
  const array = replacedStr.split(',').map(String);
  return array;
};

/**
 * @description Convert String to Object Key
 * @param {String} str
 */
exports.stringToKey = (str) => {
  const newStr = str.replace(/ /g, '_');
  return newStr;
};

/**
 * @description Create valid Object Key
 * @param {String} str
 */
exports.createValidKey = (str) => {
  const newStr = str.replace(/-| |_/g, '_');
  return newStr;
};

/**
 * @description Get Default sort Order
 * @param sortOrder
 */
exports.getDefaultSortOrder = (sortOrder) => {
  const order = !isEmpty(sortOrder) && ['ASC', 'DESC'].indexOf(sortOrder) !== -1 ? sortOrder : 'DESC';
  return order;
};

/**
 * @description encode string to base64 string
 * @param data string
 */
exports.encodingToBase64 = (data) => {
  if (!data) return data;
  const buff = new Buffer.from(data);
  return buff.toString('base64');
};

/**
 * @description decode base64 to string
 * @param data base64 string
 */
exports.decodeBase64ToString = (data) => {
  if (!data) return data;
  const buff = new Buffer.from(data, 'base64');
  return buff.toString('utf8');
};

exports.formatCurrency = (num) => {
  try {
    if (num && Number.isNaN(num) === false) return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  } catch (e) {
    return num;
  }
  return num;
};

exports.jsonParseSafe = (s, defaultVal) => {
  try {
    if (_.isEmpty(s)) {
      return defaultVal;
    }

    return JSON.parse(s);
  } catch (e) {
    return defaultVal;
  }
};

exports.isEmail = (value) => {
  // eslint-disable-next-line max-len
  const myRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isValid = myRegEx.test(value);
  return !!isValid;
};

exports.getUserDataId = (user) => {
  if (user) {
    if (user.data_uid) return user.data_uid;
    return user.id;
  }
};

exports.mathRounding = (num, digit = 2) => {
  const result = parseFloat(num).toFixed(digit);
  // eslint-disable-next-line no-restricted-globals
  if (result && isNaN(result) === false) return Number(result);
  return 0;
};

exports.leftJoinArray = (
  array1 = [],
  array2 = [],
  array1FieldName,
  array2FieldName,
  name1 = 'left',
  name2 = 'right',
) => {
  if (!array1 || !array2) throw Error('Both array are required');
  const result = [];
  array1.forEach((item) => {
    const joinItem = {
      [name1]: item,
      [name2]: array2.find((x) => x[array2FieldName] === item[array1FieldName]),
    };
    result.push(joinItem);
  });
  return result;
};

exports.groupBy = (collection, iteratee) => {
  const groupResult = _.groupBy(collection, iteratee);
  return Object.keys(groupResult).map((key) => {
    return { name: key, value: groupResult[key] };
  });
};

exports.getDate = (date) => {
  if (date) date = new Date(date);
  return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
};
