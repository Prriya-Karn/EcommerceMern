const cartDb = require("../src/models/CartSchema");
const cartDataByIdController = async(req,res)=>{
    try{
        const id = req.params.id;
        const getDataById = await cartDb.findOne({_id:id});
        res.status(200).json({
            msg : getDataById
        });
    }catch(error){
        console.log(error)
    }
}

module.exports = cartDataByIdController;