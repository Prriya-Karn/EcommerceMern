const express = require('express');
const reviewController = require('../controllers/review-controller');
const validateMiddleware = require('../middleware/validate-middleware');
const authvalidator = require("../validator/auth-validator");
const reviewRouter = express.Router();

reviewRouter.route("/review").post(validateMiddleware(authvalidator.reviewZodSchema),reviewController);

module.exports = reviewRouter;