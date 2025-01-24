const express = require('express');
const authMiddleware = require('../middleware/auth-middleware');
const delCartByIdController = require('../controllers/delCartByIdController');
const delCartByIdRouter = express.Router();

delCartByIdRouter.route("/delcartbyid/:id").delete(authMiddleware,delCartByIdController);

module.exports = delCartByIdRouter;