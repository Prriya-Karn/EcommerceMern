const imgDb = require("../../src/models/ImageSchema");
const delImgController = async(req,res)=>{
    try{
        const id = req.params.id;
        console.log("id",id)
        const delImg = await imgDb.deleteOne({_id:id})
        console.log(delImg)
        res.status(200).json(delImg)
    }catch(error){
        res.status(400).json(error);
        console.log(error)
    }
}

module.exports = delImgController;