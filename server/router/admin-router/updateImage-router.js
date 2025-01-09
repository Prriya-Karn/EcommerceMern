const express = require('express');
const authMiddleware = require('../../middleware/auth-middleware');
const adminMiddleware = require('../../middleware/admin-middleware');
const updateImgController = require('../../controllers/admin-controller/updateImage-controller');
const multerMiddleware = require('../../middleware/multer-middleware');
const updateImgRouter = express.Router();

updateImgRouter.route('/updateimg/:id').patch(authMiddleware,adminMiddleware,
    multerMiddleware().single('image'),updateImgController)


module.exports = updateImgRouter;