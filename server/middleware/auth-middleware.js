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
        
        const userData = await regisSchema.findOne({email : verifyToken.email}).select({password:0,isAdmin:0,_id:0})
        // console.log(userData);

        req.body = userData;

        next();
    }catch(error){
        res.status(400).json({
           msg:"token not valid"
        })
    }
}

module.exports = authMiddleware;