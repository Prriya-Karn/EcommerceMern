const bcrypt = require("bcryptjs")
const regisData = require("../src/models/RegisSchema");

const RegisController = async (req, res, next) => {
    try {

        // email && phone validation :-
        const { username, email, phone, password } = req.body;


        const emailExist = await regisData.findOne({ email: email })
        const phoneExist = await regisData.findOne({ phone: phone })

        if (emailExist || phoneExist) {
            const status = 400;
            const msg = (emailExist) ? "email already exist" : "phone already exist"
            const error = {
                status,
                msg
            }
            return next(error)
        }
        const userData = new regisData({ username, email, phone, password });

        await userData.save();
        console.log("data stored")

        // generate user token :-
        // this token store in localStorage or cookie not in db :-
        const tokenGenerate = await userData.generateToken();

        res.status(200).json({
            msg: "registration successful",
            userData: userData,
            user_id: userData._id.toString(),
            token: tokenGenerate
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

