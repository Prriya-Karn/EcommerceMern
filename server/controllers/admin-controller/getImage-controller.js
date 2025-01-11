const imageDb = require("../../src/models/ImageSchema");

const getImageController = async(req,res)=>{
    try{
        const getImage = await imageDb.find().select({filename:1,productName:1,price:1});
        res.status(200).json(getImage);
    }catch(error){  
        res.status(400).json(error)
        console.log(error)
    }
}

module.exports = getImageController;