const imgDb = require("../../src/models/ImageSchema");
const getImgByIdController = async(req,res)=>{
    try{
        const id = req.params.id;
        const getImgById = await imgDb.find({_id:id});
        res.status(200).json(getImgById)
    }catch(error){
        res.status(400).json(error)
    }
}

module.exports = getImgByIdController;