const reviewDb = require("../src/models/ReviewSchema");
const reviewGetDataController = async(req,res)=>{
    try{
        const getData = await reviewDb.find().select({email:0});
        res.status(200).json({
            msg : getData
        })
    }catch(error){
        res.status(400).json({
            msg : error
        })
    }
}

module.exports = reviewGetDataController;