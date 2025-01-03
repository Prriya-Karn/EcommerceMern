const jwt = require('jsonwebtoken');
const regisSchema = require("../src/models/RegisSchema");
const authMiddleware = async(req,res,next)=>{
    try{
        const StoredToken = req.header('Authorization');
        if(!StoredToken){
            return res.status(400).json({msg:"not login"})
        }

        const userToken = StoredToken.replace("Bearer","").trim("")
        const verifyToken = jwt.verify(userToken,process.env.secretKey)
        
        
        const userData = await regisSchema.findOne({email : verifyToken.email}).
        select({password:0,_id:0}) 

        // console.log("verifytoken",verifyToken)
        // console.log("userdata",userData)



        req.user = userData;  // loginned userdata
        req.token = userToken;
        req.isAdmin = verifyToken.isAdmin

        // console.log("req.user",req.user)
        // console.log("req.token",req.token)
        // console.log("req.isAdmin",req.isAdmin)
        next();
    }catch(error){
        res.status(400).json({
           msg:"token not valid"
        })
    }
}

module.exports = authMiddleware;