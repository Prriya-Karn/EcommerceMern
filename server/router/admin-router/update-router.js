const express = require('express');
const authMiddleware = require('../../middleware/auth-middleware');
const adminMiddleware = require('../../middleware/admin-middleware');
const updateController = require('../../controllers/admin-controller/update-controller');
const updateRouter = express.Router();

updateRouter.route("/update/:id").patch(authMiddleware,adminMiddleware,updateController);

module.exports = updateRouter;