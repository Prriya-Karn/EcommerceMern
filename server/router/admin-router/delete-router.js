const express = require('express');
const delController = require('../../controllers/admin-controller/delete-controller');
const delRouter = express.Router();

delRouter.route("/delete/:id").delete(delController);
module.exports = delRouter;
