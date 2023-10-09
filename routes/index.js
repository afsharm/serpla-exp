// Main route file

const express = require('express');
const { helloWorld } = require('../controllers/helloController');

const router = express.Router();

router.get('/', helloWorld);

module.exports = router;