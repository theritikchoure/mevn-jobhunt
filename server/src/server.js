const path = require('path');
const http = require('http');
const express = require('express');
const app = express();
const server = http.Server(app);

// Init Router
const favicon = require('express-favicon');
const chalk = require('chalk');
const middlewares = require('./middleware');
const routes = require('./routes/index.route.js');
const env = require('./config/env');
const connect = require('./config/database');
const logErrorService = require('./utils/errorLog/log');

const studentService = require('./services/student.service');
const employerService = require('./services/employer.service');
const studentData = require('./utils/data/student.data.js');
const employerData = require('./utils/data/employer.data.js');

async function autoSignup() {
  try {
    await studentService.addNewStudent(studentData);
    await employerService.addNewEmployer(employerData);
  } catch (e) {
    console.log(e);
  }
}

autoSignup();

// Initialize all middlewares here
middlewares.init(app);

// Routes initialization
routes(app);
const buildPath = path.join(__dirname, '../../', 'build');
app.use(favicon(path.join(buildPath, 'favicon.ico')));
app.use(express.static(buildPath));

// API Health check
app.all('/api/health-check', (req, res) => {
  return res.status(200).json({ status: 200, message: `Working Fine - ENV: ${String(env.NODE_ENV)}` });
});
// Invalid Route
app.all('/api/*', (req, res) => {
  return res.status(400).json({ status: 400, message: 'Bad Request' });
});

// Invalid Route
app.all('/*', (req, res) => {
  console.log('restarted project');
  res.sendFile(path.join(buildPath, 'index.html'));
  // return res.status(400).json({ status: 400, message: 'Bad Request' });
});

// Error handler
app.use(logErrorService);

// start the server & connect to Mongo
connect(env.DB_CONNECTION_STRING)
  .then(() => {
    console.log('%s database connected', chalk.green('✓'));
  })
  .catch((e) => {
    if (e.name === 'MongoParseError') {
      console.error(`\n\n${e.name}: Please set NODE_ENV to "production", "development", or "staging".\n\n`);
    } else if (e.name === 'MongoNetworkError') {
      console.error(`\n\n${e.name}: Please start MongoDB\n\n`);
    } else {
      console.log(e);
    }
  });

/**
 * Start Express server.
 */
server.listen(process.env.PORT, () => {
  console.log(
    '%s App is running at http://localhost:%d in %s mode',
    chalk.green('✓'),
    process.env.PORT,
    process.env.NODE_ENV,
  );
  console.log('  Press CTRL-C to stop\n');
});
