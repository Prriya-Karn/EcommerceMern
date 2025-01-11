const imgDb = require("../../src/models/ImageSchema");

const updateImgController = async (req, res) => {
    try {
        const id = req.params.id;
        const file = req.file;

        const price = req.body.price;
        const productName = req.body.productName;
        
       const  updateImg = {};

    //    updateImg.priya = "priya karn"
    //    console.log(updateImg)

        if (file) {
            updateImg.filename = file.filename,
            updateImg.filePath = file.filePath,
            updateImg.mimetype = file.mimetype,
            updateImg.uploadedAt = new Date();
        }
        if(productName){
            updateImg.productName = productName
        }
        
        if(price) {
            updateImg.price = price
            
        }
        
       
      

        console.log(updateImg)

       const saveData = await imgDb.updateOne(
            { _id: id },
            { $set: updateImg }
        );
        
        res.status(200).json(saveData);
        console.log(saveData)
    } catch (error) {
        console.log(error)
        res.status(400).json(error);
    }
}

module.exports = updateImgController;