const regisSchema = require("../src/models/RegisSchema");
const userController = async(req,res)=>{
    try{
        const data = req.user;
        // console.log(data)
        res.status(200).json({
            msg : data
        })
    
    }catch(error){
        res.status(400).send(error)
    }
}

module.exports = userController;