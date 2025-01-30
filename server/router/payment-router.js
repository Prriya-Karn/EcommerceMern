const express = require('express');
const paymentController = require('../controllers/payment-controller');
const authMiddleware = require('../middleware/auth-middleware');
const paymentRouter = express.Router();

paymentRouter.route("/payment").post(authMiddleware, paymentController.paymentController);

paymentRouter.route("/verifypayment").post(paymentController.verifyPaymentController)
module.exports = paymentRouter;
