const express = require('express');
const RegisRouter = express.Router();
const RegisController = require("../controllers/regis-controller")
const validateMiddleware = require("../middleware/validate-middleware");
const regisZodSchema = require("../validator/auth-validator");

RegisRouter.route("/registration").post(validateMiddleware(regisZodSchema),RegisController)

module.exports = RegisRouter;