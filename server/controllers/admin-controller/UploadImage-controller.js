const UploadImage = require('../../src/models/ImageSchema'); // Example model

const uploadImageController = async (req, res) => {
    try {
        // Log the received file for debugging
        console.log("File Received:", req.file);

        // Check if the file exists
        if (!req.file) {
            return res.status(400).json({ error: "No file uploaded!" });
        }

        // Extract the file path and save it to the database
        const uploadedFilename = req.file.filename;   // filename :- Access the filename generated by multer
                                                    // in req.file have all info about file add by multerMiddleware
        const filePath = req.file.path;
        console.log("File Path to Save:", filePath);

        // Save both filename and path to the database
        const newImage = new UploadImage({
            filename: uploadedFilename, // Save the filename
            filePath                     // Save the file path
        });
        
        newImage.save()
        res.status(200).json({
            message: "File uploaded successfully",
            filename: uploadedFilename,
            path: filePath
        });
    } catch (err) {
        console.error("Error:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = uploadImageController;