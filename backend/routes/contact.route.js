const express = require('express');
const Router = express.Router();

const validate = require('../middlewares/validate.middleware');
const { contactSchema } = require('../validators/contact.schema');
const { submitContact } = require('../controllers/contact.controller');

Router.post('/submit', validate(contactSchema), submitContact);

module.exports = Router;