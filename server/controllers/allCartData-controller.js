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

        console.time("API Fetch Time");
await fetch("https://ecommercemern-1-bj94.onrender.com/api/allcartdata");
console.timeEnd("API Fetch Time");


        // console.log(getCartData)
    }catch(error){
        console.log(error)
    }

}

module.exports = allCartDataController;