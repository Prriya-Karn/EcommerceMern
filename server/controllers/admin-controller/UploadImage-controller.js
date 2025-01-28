const dbImage = require("../../src/models/ImageSchema");
const path = require("path");

const uploadImageController = async (req, res, next) => {
    try {
        const categoryImage = req.params.category;

        const imgData = req.file; // Contains the file metadata
        if (!imgData) {
            return res.status(400).json({ message: "No file uploaded" });
        }

        const productName = req.body.proname;
        const price = req.body.price;

        // Construct filePath manually (accessible from the static `/images` route)
        // const filePath = path.join("/images", imgData.filename);

        // Create a new document
        const imgSaveInDb = new dbImage({
            filename: imgData.filename,
            // filePath: filePath, 
            mimetype: imgData.mimetype,
            uploadedAt: new Date(), // Add a timestamp
            productName: productName,
            price: price,
            categoryImage: categoryImage,
        });

        // Save to the database
        await imgSaveInDb.save();

        // Respond with success
        res.status(200).json({
            message: "Image uploaded successfully",
            filename: imgSaveInDb.filename,
            _id: imgSaveInDb.id,
            productName: imgSaveInDb.productName,
            price: imgSaveInDb.price,
            categoryImage: imgSaveInDb.categoryImage,
            filePath: imgSaveInDb.filePath,
        });

        console.log("Image saved:", imgSaveInDb);
    } catch (error) {
        console.error("Error uploading image:", error);
        res.status(500).json({ message: "Image upload failed", error: error.message });
    }
};

module.exports = uploadImageController;
