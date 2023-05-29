'use strict';

// Third Party Resources
const express = require('express');
const cors = require('cors');

// Project Specific Modules
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');
const notFound = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');

// Prepare the express app (create express singleton)
const app = express();

// App Level Middleware
app.use(cors());
app.use(express.json()); // Process JSON input and put the data on req.body
app.use(logger);
app.use(validator);

// Routes
app.get('/', (req, res, next) => {
  res.status(200).send('proof of life');
});

// Catch alls
app.use('*', notFound);
app.use(errorHandler);

const start = (port) => app.listen(port, () => console.log('listening on port: ', port));

// Exports
module.exports = { start, app };
