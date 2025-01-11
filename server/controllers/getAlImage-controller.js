const imgDb = require('../src/models/ImageSchema');

const getAlImgController = async(req,res)=>{
    try{
        const getallimg = await imgDb.find();
        res.status(200).json({
            msg : getallimg
        })
    }catch(error){
        res.status(400).json(error)
    }
}

module.exports = getAlImgController;