const i18n = require('i18n');
const env = require('../config/env');

i18n.configure({
  defaultLocale: '',
  // where to store json files - defaults to './locales' relative to modules directory
  directory: __dirname + '/../locales',
  // setup some locales - other locales default to en silently
  locales: ['en'],
  // sets a custom cookie name to parse locale settings from - defaults to NULL
  cookie: 'GeoSpree',
  // watch for changes in json files to reload locale on updates - defaults to false
  autoReload: env.APP_ENV === 'development',
  // enable object notation
  objectNotation: true,
});

module.exports = i18n;
