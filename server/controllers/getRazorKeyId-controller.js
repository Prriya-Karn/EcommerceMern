const getRazorKeyIdController = async(req,res)=>{
    try{
        const getrazorkeyid = process.env.RAZORPAY_KEY_ID;
        res.status(200).json({
            msg : getrazorkeyid
        })


    }catch(error){
        res.status(400).json({
            msg : error
        });
    }
}

module.exports = getRazorKeyIdController;