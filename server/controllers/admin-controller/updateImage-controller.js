const imgDb = require("../../src/models/ImageSchema");

const updateImgController = async(req,res)=>{
    try{
        const id = req.params.id;
        const file = req.file;
       
        // console.log(file)
        const updImg = await imgDb.updateOne({_id:id},{$set:file})
        res.status(200).json(updImg);
        console.log(updImg)

    }catch(error){
        console.log(error)
        res.status(400).json(error);
    }
}

module.exports = updateImgController;