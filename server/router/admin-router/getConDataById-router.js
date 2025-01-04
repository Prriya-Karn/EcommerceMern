const express = require('express');
const authMiddleware = require('../../middleware/auth-middleware');
const adminMiddleware = require('../../middleware/admin-middleware');
const conDataByIdController = require('../../controllers/admin-controller/getConDataById-controller');
const conDataByIdRouter = express.Router();

conDataByIdRouter.route("/conbyid/:id").get(authMiddleware,adminMiddleware,conDataByIdController);
module.exports = conDataByIdRouter;