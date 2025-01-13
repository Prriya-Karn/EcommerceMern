const express = require('express');
const addToCartController = require('../controllers/addToCart-controller');
const multerMiddleware = require('../middleware/multer-middleware');
const addToCartRouter = express.Router();

addToCartRouter.route("/addtocart").post(addToCartController);
module.exports = addToCartRouter;