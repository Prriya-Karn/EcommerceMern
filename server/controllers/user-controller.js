const regisSchema = require("../src/models/RegisSchema");
const userController = async(req,res)=>{
    try{
        const data = req.body
        res.status(200).json({
            msg : data
        })
    }catch(error){

    }
}

module.exports = userController;