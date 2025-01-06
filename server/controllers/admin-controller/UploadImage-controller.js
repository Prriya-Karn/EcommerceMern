const dbImage = require("../../src/models/ImageSchema");
const uploadImageController = async(req,res,next)=>{
    try{
        
        const imgSaveInDb = await new dbImage(req.file);
        imgSaveInDb.save()
       res.status(200).json({
        msg : imgSaveInDb
       })
       console.log(imgSaveInDb)
    }catch(error){
       res.status(400).json(error)
    }
}

module.exports = uploadImageController;