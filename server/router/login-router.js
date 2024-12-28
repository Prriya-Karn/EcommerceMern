const express = require("express");
const loginController = require("../controllers/login-controller");
const validateMiddleware = require("../middleware/validate-middleware");
const SchemaZod = require("../validator/auth-validator")
const loginRouter = express.Router();



loginRouter.route("/login").get(validateMiddleware(SchemaZod.loginSchema),loginController)

module.exports = loginRouter;


