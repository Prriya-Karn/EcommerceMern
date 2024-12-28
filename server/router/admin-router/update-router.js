const express = require('express');
const updateDataController = require('../../controllers/admin-controller/update-controller');
const updateRouter = express.Router();

updateRouter.route("/update/:id").patch(updateDataController)

module.exports = updateRouter;

