const cartDb = require("../src/models/CartSchema");

const allCartDataController = async(req,res)=>{
    try{
        const getCartData = await cartDb.find();
        res.status(200).json({
            msg : getCartData
        })
    }catch(error){
        console.log(error)
    }

}

module.exports = allCartDataController;