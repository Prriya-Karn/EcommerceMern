const express = require('express');
const authMiddleware = require('../middleware/auth-middleware');
const userController = require('../controllers/user-controller');
const userRouter = express.Router();

userRouter.route("/user").get(authMiddleware,userController);

module.exports = userRouter;