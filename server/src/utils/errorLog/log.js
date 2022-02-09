/**
 * Error handler for api routes
 */
const Sentry = require('@sentry/node');
const PrettyError = require('pretty-error');
const HTTPStatus = require('http-status');
const { SENTRY_KEY, NODE_ENV } = require('../../config/env');
const APIError = require('./error');
const { RequiredError } = require('./error');

const isDev = NODE_ENV === 'development';
const isProd = !isDev;

// eslint-disable-next-line no-unused-vars
module.exports = (err, req, res, next) => {
  console.log('isProd', isProd);
  if (!err) {
    return new APIError('Error with the server!', HTTPStatus.INTERNAL_SERVER_ERROR, true);
  }

  if (isProd) {
    Sentry.init({ dsn: SENTRY_KEY });

    const { user } = req;
    if (user) {
      Sentry.configureScope(function(scope) {
        scope.setUser({ email: user.email, id: user.id });
      });
    }
    Sentry.captureException(err);
  }

  if (isDev) {
    const pe = new PrettyError();
    pe.skipNodeFiles();
    pe.skipPackage('express');

    // eslint-disable-next-line no-console
    console.log('ERROR', pe.render(err));
  }

  const error = {
    message: err.message || 'Internal Server Error.',
  };

  if (err.errors) {
    error.errors = {};
    const { errors } = err;
    if (Array.isArray(errors)) {
      error.errors = RequiredError.makePretty(errors);
    } else {
      Object.keys(errors).forEach((key) => {
        error.errors[key] = errors[key].message;
      });
    }
  }

  res.status(err.status || HTTPStatus.INTERNAL_SERVER_ERROR).json(error);

  return next();
};
