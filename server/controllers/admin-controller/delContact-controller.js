const conData = require('../../src/models/ContactSchema');
const delContactController = async(req,res,next)=>{
    try{
        const id = req.params.id;
        const delConData = await conData.deleteOne({_id:id});
        console.log(delConData)
        res.status(200).json({
            msg : delConData
        })
        
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

module.exports = delContactController;