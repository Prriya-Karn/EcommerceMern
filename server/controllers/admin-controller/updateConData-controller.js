const conDb = require("../../src/models/ContactSchema");
const updateConDataController = async(req,res)=>{
    try{
        const id = req.params.id;
        const updateConData = await conDb.updateOne({_id:id},{$set:req.body})
        res.status(200).json({
            msg : updateConData
        })
        console.log(updateConData)
    }catch(error){
        res.status(400).json({
            msg : error
        })
    }
}

module.exports = updateConDataController;