const Razorpay = require('razorpay');
const crypto = require('crypto');
const paymentdb = require('../src/models/PaymentSchema'); // Assuming you're using MongoDB for the orders
const nodemailer = require('nodemailer');

// Initialize Razorpay instance with your key details
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,  // Make sure to load your Razorpay key from the environment variables
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});


const paymentController = async (req, res) => {
    try{
        const options = {
            amount : Number(req.body.amount * 100),
            currency : "INR",
        }
        const order = await razorpay.orders.create(options);
        // console.log(order);
        res.status(200).json({
            msg : "success",
            order
        })
    }catch(error){
        console.log(error)
    }
};

const verifyPaymentController = async (req, res) => {
        try {
            const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;
    
            // Generate expected signature using Razorpay's secret key
            const generatedSignature = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
                .update(razorpay_order_id + "|" + razorpay_payment_id)
                .digest("hex");
    
            if (generatedSignature === razorpay_signature) {
                const saveDb = new paymentdb(req.body);
                await saveDb.save()
                return res.status(200).json({ success: true, message: "Payment Verified" });
            } else {
                console.log("Payment verification failed!");
                return res.status(400).json({ success: false, message: "Invalid Signature" });
            }
        } catch (error) {
            console.error("Error verifying payment:", error);
            res.status(500).json({ success: false, message: "Server Error" });
        }
};

module.exports = {paymentController,verifyPaymentController};





























