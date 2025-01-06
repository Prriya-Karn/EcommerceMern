const multer = require('multer');
const path = require('path');

const multerMiddleware = () => {
    // where to file save and unique file name:-

    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            console.log(path.join(__dirname, "../uploads"))
            cb(null, path.join(__dirname, "../uploads"))
        },
        filename: (req, file, cb) => {
            cb(null, Date.now() + "-" + file.originalname)
        }
    })

    const fileFilter = (req, file, cb) => {
        if (file.mimetype.startsWith("image/")) {
            cb(null, true)
        } else {
            cb(new Error("only image file will be allowed"), false)
        }
    }

// this is upload instance here
    const upload = multer({
        storage,
        fileFilter,
        limits: { fileSize: 5 * 1024 * 1024 }
    })
    // because of instance here cannot send req.file or req.body we have to call or return:-
    
    return upload;

}

module.exports = multerMiddleware;


