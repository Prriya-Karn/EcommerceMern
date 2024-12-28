const express = require('express');
const getUserByIdController = require('../controllers/getUserById-controller');
const getUserRouter = express.Router();

getUserRouter.route("/getuserbyid/:id").get(getUserByIdController);

module.exports = getUserRouter;

