const express = require('express');
const authMiddleware = require('../../middleware/auth-middleware');
const adminMiddleware = require('../../middleware/admin-middleware');
const delContactController = require('../../controllers/admin-controller/delContact-controller');
const delConRouter = express.Router();

delConRouter.route("/delcondata/:id").delete(authMiddleware,adminMiddleware,delContactController);

module.exports = delConRouter;