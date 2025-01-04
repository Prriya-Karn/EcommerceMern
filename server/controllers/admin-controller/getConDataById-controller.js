const conDb = require("../../src/models/ContactSchema");
const conDataByIdController = async(req,res,next)=>{
    try{
        const id = req.params.id;
        const getConData = await conDb.find({_id:id});
        res.status(200).json({
            msg : getConData
        })
        console.log(getConData)
    }catch(error){
        const status = 400;
        const msg = error;
        const err = {
            status,
            msg
        }
        next(err)
    }
}

module.exports = conDataByIdController;