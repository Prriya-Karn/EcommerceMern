const express = require('express');
const multerMiddleware = require('../../middleware/multer-middleware');

const uploadImageController = require('../../controllers/admin-controller/UploadImage-controller');
const imageUploadRouter = express.Router();

imageUploadRouter.route("/upload").post(multerMiddleware().single("image"),uploadImageController)

module.exports = imageUploadRouter;