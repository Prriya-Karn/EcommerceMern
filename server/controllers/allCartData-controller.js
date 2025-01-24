const cartDb = require("../src/models/CartSchema");

const allCartDataController = async(req,res)=>{
    try{
        const getCartData = await cartDb.find();
        const totalItem = await getCartData.reduce((acc,item)=>{
            return acc + item.quantity
        },0)

        res.status(200).json({
            msg : getCartData,
            totalItem : totalItem
        })
        console.log(getCartData)
    }catch(error){
        console.log(error)
    }

}

module.exports = allCartDataController;