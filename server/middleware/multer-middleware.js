const multer = require('multer');
const path = require('path');

// require("../../client/public/images")
const multerMiddleware = () => {
    // where to file save and unique file name:-

    const storage = multer.diskStorage({
        
        destination: (req, file, cb) => {
           
            cb(null, path.join(__dirname, "../../public/images"))
        },
        
        filename: (req, file, cb) => {
            // console.log(path.join(__dirname, "../../images")); 
            cb(null, Date.now() + "-" + file.originalname)
        }
        
    })
    
    const fileFilter = (req, file, cb) => {
        if (file.mimetype.startsWith("image/")) {
            cb(null, true);
        } else {
            cb(new Error("only image file will be allowed"), false)
        }
    }

// this is upload instance here
    const upload = multer({
        storage,
        fileFilter,
        // filesize 5 mb
        limits: { fileSize: 5 * 1024 * 1024 }
    })
    
    // because of instance here cannot send req.file or req.body we have to call or return:-
    
    return upload;

}

module.exports = multerMiddleware;


