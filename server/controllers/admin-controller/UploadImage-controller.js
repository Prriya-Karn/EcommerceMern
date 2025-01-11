const dbImage = require("../../src/models/ImageSchema");
const uploadImageController = async (req, res, next) => {
    try {
        const imgData = req.file;
        
        const productName = req.body.proname;
        const price = req.body.price;
        console.log("imgdata", imgData)
        const imgSaveInDb = new dbImage({
            filename: imgData.filename,
            filePath: imgData.filePath,
            mimetype: imgData.mimetype,
            uploadedAt: imgData.uploadedAt,
            productName: productName,
            price: price
        })


        imgSaveInDb.save()
        console.log("data", imgSaveInDb)

        res.status(200).json({
            filename: imgSaveInDb.filename,
            _id: imgSaveInDb.id,
            productName: imgSaveInDb.productName,
            price: imgSaveInDb.price
        })
        console.log(imgSaveInDb)
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = uploadImageController;