const express = require('express');
const getAlImgController = require('../controllers/getAlImage-controller');
const getAlImgRouter = express.Router();

getAlImgRouter.route("/getallimg").get(getAlImgController);

module.exports = getAlImgRouter;