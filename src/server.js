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

// Routes
app.get('/', (req, res, next) => {
  res.status(200).send('proof of life');
});

app.get('/success', (req, res, next) => {
  res.status(200).send('Success!');
});

app.get('/person', validator, (req, res, next) => {
  if(req.query.name) {
    res.status(200).json({name: req.query.name});
  } else {
    next('Must have name property');
  }
});

// Catch alls
app.use('*', notFound);
app.use(errorHandler);

const start = (port) => app.listen(port, () => console.log(`Listening on ${port}`));

// Exports
module.exports = { start, app };
