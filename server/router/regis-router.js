const express = require('express');
const RegisRouter = express.Router();
const validateMiddleware = require("../middleware/validate-middleware");

const ZodSchema = require("../validator/auth-validator");
const { RegisController } = require('../controllers/regis-controller');

RegisRouter.route("/registration").post(validateMiddleware(ZodSchema.regisSchema),RegisController)

module.exports = RegisRouter;