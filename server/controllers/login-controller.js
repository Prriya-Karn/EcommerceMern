const bcrypt = require('bcryptjs');
const regisData = require("../src/models/RegisSchema");

const loginController = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const userExist = await regisData.findOne({ email: email });
        const pass = await bcrypt.compare(password, userExist.password)
        
        if(!userExist){
            return res.status(400).json({
                msg: "login not successfull"
            })
        }

       
        if(!pass){
            return res.status(400).json({
                msg: "login not successfull"
            }) 
        }
        return res.status(200).json({
            msg: "login successfull"
        })

    }catch(error) {
        console.log(error)
    }
}

module.exports = loginController;