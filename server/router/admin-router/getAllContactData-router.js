const express = require('express');
const authMiddleware = require('../../middleware/auth-middleware');
const adminMiddleware = require('../../middleware/admin-middleware');
const getAllContactDataController = require('../../controllers/admin-controller/getAllContactData-controller');
const AllContactDataRouter = express.Router();

AllContactDataRouter.route("/allcontactdata").get(authMiddleware,adminMiddleware,getAllContactDataController);


module.exports = AllContactDataRouter;