const express = require('express');
const AllUserController = require('../../controllers/admin-controller/getAllUserData-controller');
const adminMiddleware = require('../../middleware/admin-middleware');
const authMiddleware = require('../../middleware/auth-middleware');
const AllUserRouter = express.Router();

AllUserRouter.route("/alluserdata").get(authMiddleware,adminMiddleware,AllUserController);

module.exports = AllUserRouter;