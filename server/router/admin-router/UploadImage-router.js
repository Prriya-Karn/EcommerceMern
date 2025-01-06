const express = require('express');
const multerMiddleware = require('../../middleware/multer-middleware');

const uploadImageController = require('../../controllers/admin-controller/UploadImage-controller');
const authMiddleware = require('../../middleware/auth-middleware');
const adminMiddleware = require('../../middleware/admin-middleware');
const imageUploadRouter = express.Router();

imageUploadRouter.route("/upload").post(authMiddleware,adminMiddleware,
    multerMiddleware().single("image"),uploadImageController)

module.exports = imageUploadRouter;