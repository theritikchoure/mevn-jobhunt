const bodyParser = require('body-parser');
const compression = require('compression');
const cors = require('cors');
const helmet = require('helmet');
const passport = require('passport');
const fileUpload = require('express-fileupload');
const morgan = require('morgan');
const i18n = require('./i18n');
const passportJwtUtils = require('./passportJwtUtils');

class Middlewares {
  init(app) {
    app.set('PORT', process.env.PORT || 5000);
    app.use(compression());
    app.use(cors());
    app.use(helmet());
    app.use(bodyParser.json({ limit: '5mb' }));
    app.use(bodyParser.urlencoded({ extended: true, limit: '5mb' }));
    app.use(fileUpload());

    // Init i18n into middleware
    app.use(i18n.init);

    /**
     * Passport middleware init
     */
    app.use(passport.initialize());
    app.use(passport.session());
    /**
     * Passport strategy
     */
    passportJwtUtils(passport);

    app.use(
      morgan(function(tokens, req, res) {
        return [
          tokens.method(req, res),
          tokens.url(req, res),
          tokens.status(req, res),
          tokens.res(req, res, 'content-length'),
          '-',
          tokens['response-time'](req, res),
          'ms',
        ].join(' ');
      }),
    );
  }
}

const middlewareObj = new Middlewares();
module.exports = middlewareObj;
