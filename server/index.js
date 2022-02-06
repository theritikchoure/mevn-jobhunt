// config should be imported before importing any other file
const config = require('./config/config');
const app = require('./config/express');
require('./config/mongoose');
// app.use(bodyParser.json());

if (!module.parent) {
    app.listen(config.port, () => {
        console.info(`Server Started on Port ${config.port} (${config.env})`);
    });
}

module.exports = app;
