const mongoose = require('mongoose');

// Define the Order schema
const PaymentSchema = new mongoose.Schema(
  {
    razorpay_payment_id : {
        type: String,
        require : true
    },
    razorpay_order_id:{
        type: String,
        require : true
    },
    razorpay_signature :{
        type: String,
        require : true
    },
    
  }
);

// Create the model
const payment = mongoose.model('payment', PaymentSchema);

module.exports = payment;
