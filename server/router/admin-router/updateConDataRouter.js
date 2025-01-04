const express = require('express');
const authMiddleware = require('../../middleware/auth-middleware');
const adminMiddleware = require('../../middleware/admin-middleware');
const updateConDataController = require('../../controllers/admin-controller/updateConData-controller');
const updateConDataRouter = express.Router();

updateConDataRouter.route("/updatecondata/:id").patch(authMiddleware,adminMiddleware,updateConDataController);

module.exports = updateConDataRouter;