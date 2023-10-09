// Express.js application setup

const express = require('express');
const indexRoutes = require('./routes/index');

const app = express();

app.use('/', indexRoutes);

module.exports = app;