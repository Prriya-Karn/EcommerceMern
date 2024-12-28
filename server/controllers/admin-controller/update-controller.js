const regisData = require("./../../src/models/RegisSchema")
const updateUserData = async(req,res,next)=>{
    try{
        const userData = req.body;
        const id = req.params.id;
        const updatedData = await regisData.updateOne({_id:id},{$set:userData})
      
        res.status(200).json({
            msg : updatedData
        })
    }catch(error){
        console.log(error)
    }
}

module.exports = updateUserData;