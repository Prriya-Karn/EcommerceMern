const express = require('express');
const authMiddleware = require('../../middleware/auth-middleware');
const adminMiddleware = require('../../middleware/admin-middleware');
const getImageController = require('../../controllers/admin-controller/getImage-controller');
const getImageRouter = express.Router();

getImageRouter.route("/getimage").get(authMiddleware,adminMiddleware,getImageController)

module.exports = getImageRouter;