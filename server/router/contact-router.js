const express = require('express');
const contactRouter = express.Router();
const validateMiddleware = require("../middleware/validate-middleware");
const conController = require("../controllers/contact-controller")
const ZodSchema = require('../validator/auth-validator')

contactRouter.route("/contact").post(validateMiddleware(ZodSchema.ContactSchema),conController);

module.exports = contactRouter;
