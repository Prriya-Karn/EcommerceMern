const express = require('express');
const delController = require('../../controllers/admin-controller/delete-controller');
const authMiddleware = require('../../middleware/auth-middleware');
const adminMiddleware = require('../../middleware/admin-middleware');
const delRouter = express.Router();

delRouter.route("/delete/:id").delete(authMiddleware,adminMiddleware,delController);
module.exports = delRouter;