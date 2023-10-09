// Express.js application setup

const express = require('express');
const indexRoutes = require('./routes/index');
const experienceRoutes = require('./routes/experience');

const app = express();

app.use(express.json());
app.use('/experience', experienceRoutes);
app.use('/', indexRoutes);

module.exports = app;