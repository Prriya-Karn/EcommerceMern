const express = require('express');
const authMiddleware = require('../../middleware/auth-middleware');
const adminMiddleware = require('../../middleware/admin-middleware');
const getImgByIdController = require('../../controllers/admin-controller/getImageById-controller');
const getImgByIdRouter = express.Router();

getImgByIdRouter.route('/getimgbyid/:id').get(authMiddleware,adminMiddleware,getImgByIdController);

module.exports = getImgByIdRouter;