const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    quantity:{
        type : Number
    },
    price:{
        type:Number
    },
    productName : {
        type:String,
        unique:true
    },
    
        productImage:{
            type : String,
            default: "https://example.com/default-image.jpg",
        },
        totalItem : {
            type : Number,
        }
    
})

const cartModel = mongoose.model("cartData",CartSchema);
module.exports = cartModel;