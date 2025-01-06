const express = require('express');
const authMiddleware = require('../../middleware/auth-middleware');
const adminMiddleware = require('../../middleware/admin-middleware');
const delImgController = require('../../controllers/admin-controller/deleteImg-controller');
const delImgRouter = express.Router();

delImgRouter.route("/delimg/:id").delete(authMiddleware,adminMiddleware,delImgController)
module.exports = delImgRouter;