const ContactData = require("../src/models/ContactSchema");

const contactController = async (req,res,next) => {
    try {
       const {username,email,message} = req.body;
       const id = req.params.id
       console.log("id",id)
       const conEmail = await ContactData.findOne({email:email});
       if(conEmail){
        return res.status(400).json({
            msg : "email already exist"
        })
       }

       const conData = new ContactData({username,email,message});
       await conData.save();

       return res.status(200).json({
        msg : "data stored"
       })


    } catch (error) {
        res.status(400).json({
           msg: error
        })
    }
}


module.exports = contactController;