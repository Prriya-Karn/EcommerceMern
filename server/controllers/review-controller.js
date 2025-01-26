const reviewDb = require("../src/models/ReviewSchema")
const reviewController = async(req,res)=>{
    try{
        
        const {reviewMessage,name,email} = req.body;

        // find email in db :-
        const isEmailExist = await reviewDb.findOne({email:email});
        if(isEmailExist){
            return res.status(400).json({
                msg : "email already exist"
            })
        }else{
            const reviewData = new reviewDb({reviewMessage,name,email});
            await reviewData.save();
          
            res.status(200).json({
                msg : reviewData
            })
        }

    }catch(error){
        res.status(400).json({
            msg : error
        })
    }
}

module.exports = reviewController;