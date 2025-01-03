const regisData = require('../../src/models/RegisSchema');

const AllUserController = async(req,res,next)=>{
    try{
        const getRegisData = await regisData.find();
        if(await regisData.countDocuments()==0){
            const status = 400;
            const msg = "db is empty";
            const err = {
                status,
                msg
            }
            return next(err)
        }
        res.status(200).json(getRegisData);
    }catch(error){
        res.status(400).send(error)
    }
}
module.exports = AllUserController;