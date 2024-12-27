const bcrypt = require("bcryptjs")
const regisData = require("../src/models/RegisSchema");

const RegisController = async (req, res, next) => {
    try {

        // email validation :-
        const { username, email, phone, password } = req.body;


        const emailExist = await regisData.findOne({ email: email })
        const phoneExist = await regisData.findOne({ phone: phone })

        if (emailExist || phoneExist) {
            const status = 400;
            const msg = (emailExist)?"email already exist":"phone already exist"
            const error = {
                status,
                msg
            }
            return next(error)
        }

        // const saltround = 10;
        // const bcryptPass = await bcrypt.hash(password,saltround);
        

        const userData = new regisData({ username, email, phone, password});
        await userData.save();
        console.log("data stored")
        res.status(200).json({
            msg: "data stored",
            userData
        })
    } catch (error) {
        // console.log(error)
        const status = 400;
        const msg = "data not stored";
        const extradetails = error
        const err = {
            status,
            msg,
            extradetails
        }
        next(err)
    }
}

module.exports = RegisController;