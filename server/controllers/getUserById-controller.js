const regisData = require('../src/models/RegisSchema');

const getUserByIdController = async (req, res, next) => {
    try {
        const id = req.params.id;
        const getDataUser = await regisData.findOne({ _id: id });
        res.status(200).json({
            msg: getDataUser
        })
        // console.log(getDataUser);
        
    } catch (error) {
        res.status(400).json({
            msg: "not getData User"
        })
    }   
}

module.exports = getUserByIdController;