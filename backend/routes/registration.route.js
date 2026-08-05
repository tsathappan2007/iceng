const express = require('express');
const Router = express.Router();

const validate = require('../middlewares/validate.middleware');
const { registrationSchema } = require('../validators/registration.schema');
const { registerUser } = require('../controllers/registration.controller');

Router.post('/register', validate(registrationSchema), registerUser);

module.exports = Router;