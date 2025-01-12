const express = require('express');
const allCartDataController = require('../controllers/allCartData-controller');
const allCartDataRouter = express.Router();

allCartDataRouter.route("/allcartdata").get(allCartDataController)

module.exports = allCartDataRouter;