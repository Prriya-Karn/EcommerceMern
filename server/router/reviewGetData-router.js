const express = require('express');
const reviewGetDataController = require('../controllers/reviewGetData-controller');
const reviewGetDataRouter = express.Router();

reviewGetDataRouter.route("/reviewgetdata").get(reviewGetDataController);

module.exports = reviewGetDataRouter;