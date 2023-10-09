// Express.js application setup

const express = require('express');
const indexRoutes = require('./routes/index');
const experienceRoutes = require('./routes/experience');

const app = express();

app.use(express.json());
app.use('/experience', experienceRoutes);
app.use('/', indexRoutes);

// Custom error handling middleware
app.use((err, req, res, next) => {
    console.error(err); // Log the error for debugging purposes

    // Set the response status code
    res.status(err.status || 500);

    // Send the error response as JSON
    res.json({
        error: {
            message: err.message,
            // Additional properties if needed
        },
    });
});


module.exports = app;