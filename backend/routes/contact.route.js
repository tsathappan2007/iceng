const express = require('express');
const Router = express.Router();

const { submitContact } = require('../controllers/contact.controller');

Router.post('/submit', submitContact);

module.exports = Router;