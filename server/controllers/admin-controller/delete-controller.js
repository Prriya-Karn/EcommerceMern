const regisSchema = require('../../src/models/RegisSchema');

const delController = async (req, res, next) => {
    try {
        const id = req.params.id
        const delUser = await regisSchema.deleteOne({ _id: id })
        res.status(200).json({
            msg: "deleted"
        })
        console.log(delUser)
    } catch (error) {
        res.status(400).json({
            msg: "not deleted"
        })
    }
}

module.exports = delController;