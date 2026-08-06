const express = require('express');
const Router = express.Router();
const { submitPaper, getPapers } = require('../controllers/paper.controller');

Router.post('/submit', submitPaper);
Router.get('/', getPapers);

module.exports = Router;