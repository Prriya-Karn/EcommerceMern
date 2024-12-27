const bcrypt = require('bcryptjs');
const regisData = require("../src/models/RegisSchema");

const loginController = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const userExist = await regisData.findOne({ email: email });
        if(!userExist){
            return res.status(400).json({
                msg: "login not successfull"
            })
        }

        // const pass = await bcrypt.compare(password, userExist.password)

       const pass = await userExist.comparePass(password);
       

        if(!pass){
            return res.status(400).json({
                msg: "login not successfull"
            }) 
        }
        return res.status(200).json({
            msg: "login successfull",
            token: await userExist.generateToken(),
            userId : userExist._id.toString()
        })

    }catch(error){
        console.log(error)
    }
}

module.exports = loginController;