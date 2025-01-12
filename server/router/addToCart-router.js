const express = require('express');
const addToCartController = require('../controllers/addToCart-controller');
const addToCartRouter = express.Router();

addToCartRouter.route("/addtocart").post(addToCartController);
module.exports = addToCartRouter;