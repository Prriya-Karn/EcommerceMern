const regisData = require('../../src/models/RegisSchema')
const updateController = async(req,res,next)=>{
    try{
        const id = req.params.id;
        const updateData = req.body;    
        const updateRes = await regisData.updateOne({_id:id},{$set:updateData});
        console.log("updated data",updateRes)
        return res.status(200).json({
            msg : updateRes
        })
        
    }catch(error){
        const status = 400;
        const msg = error;
        const err = {
            status,
            msg
        }
        next(err);
       
    }
}

module.exports = updateController;