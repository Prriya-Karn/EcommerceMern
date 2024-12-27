const express = require('express');
const RegisRouter = express.Router();
const RegisController = require("../controllers/regis-controller")
const validateMiddleware = require("../middleware/validate-middleware");
const ZodSchema = require("../validator/auth-validator");

RegisRouter.route("/registration").post(validateMiddleware(ZodSchema.regisSchema),RegisController)

module.exports = RegisRouter;