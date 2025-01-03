const conData = require('../../src/models/ContactSchema');

const getAllContactDataController = async (req, res, next) => {
    try {
        const contactData = await conData.find();
        res.status(200).json({
            msg: contactData
        })
    } catch (error) {
        const status = 400;
        const msg = error;
        const err = {
            status,
            msg
        }
        next(err)
    }
}

module.exports = getAllContactDataController;
