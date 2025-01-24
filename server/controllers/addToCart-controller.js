const cartDb = require("../src/models/CartSchema");
const addToCartController = async(req,res)=>{
    try{
       

        const findProductName = await cartDb.findOne({productName:req.body.productName});
        console.log(cartDb)

        if(!findProductName){
            const priceRes = req.body.quantity * req.body.price;
            const saveInDb = new cartDb({
                quantity:req.body.quantity,
                price:priceRes,
                productName:req.body.productName,
                productImage : req.body.productImage,
                
            })
            await saveInDb.save();
        res.status(200).json({
            msg : saveInDb
        })
           console.log(saveInDb)
        }else{

           findProductName.quantity+=req.body.quantity;
            findProductName.price+=(req.body.price * req.body.quantity);
            await findProductName.save()
            res.status(200).json({
               
                msg : findProductName
            })
        }
        
        
        

    }catch(error){
        console.log(error)
        res.status(400).json(error)
    }
}
module.exports = addToCartController;