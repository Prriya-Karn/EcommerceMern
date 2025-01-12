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
    }
})

const cartModel = mongoose.model("cartData",CartSchema);
module.exports = cartModel;