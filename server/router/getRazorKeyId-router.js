const express = require('express');
const getRazorKeyIdController = require('../controllers/getRazorKeyId-controller');
const getRazorKeyIdRouter = express.Router();

getRazorKeyIdRouter.route("/razorkeyid").get(getRazorKeyIdController);


module.exports = getRazorKeyIdRouter;