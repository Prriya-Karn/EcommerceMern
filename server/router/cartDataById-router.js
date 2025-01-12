const express = require('express');
const cartDataByIdController = require('../controllers/cartDataById-controller');
const cartDataByIdRouter = express.Router();

cartDataByIdRouter.route("/cardatabyid/:id").get(cartDataByIdController);

module.exports = cartDataByIdRouter;