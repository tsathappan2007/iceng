const express = require('express');
const Router = express.Router();

const validate = require('../middlewares/validate.middleware');
const { paperSchema } = require('../validators/paper.schema');
const { submitPaper } = require('../controllers/paper.controller');

Router.post('/submit', validate(paperSchema), submitPaper);

module.exports = Router;