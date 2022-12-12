const express = require('express');
const bodyParser = require('body-parser');
const { model } = require('mongoose');
const { application } = require('express');
const { login } = require('../controllers/lecturer')

const router = express.Router()

router.use(bodyParser.json());

router.post('/login', login)

module.exports = router;