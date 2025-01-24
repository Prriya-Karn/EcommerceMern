const cartData = require("../src/models/CartSchema");
const delCartByIdController = async(req,res,next)=>{
    try{
        const {id} = req.params;
        const delCartData = await cartData.deleteOne({_id:id})
        res.status(200).json({
            msg : delCartData
        })
    }catch(error){
        const msg = error;
        const err = {
            msg
        }
        next(err)
    }
}

module.exports = delCartByIdController;