const bcrypt = require("bcryptjs")
const mongoose = require('mongoose');
const userRegisSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: Number,
        required: true,
        unique: true,
        minlength: 10
    },
    password: {
        type: String,
        unique: true,
        require: true
    },
    isAdmin:{
        type: String,
        require: true,
        default: false
    }
})

// bcrypt the password using pre method:-
userRegisSchema.pre("save",async function(next){
    
        const userPass = this;
        // console.log(userPass)
        // const saltround = await bcrypt.genSalt(10);
        // const bcryptPass = await bcrypt.hash(userPass.password,saltround)
        // userPass.password = bcryptPass
        // console.log(userPass)
        
        if(userPass.isModified('password')){ 
            try{
            const saltround = await bcrypt.genSalt(10);
            const bcryptPass = await bcrypt.hash(userPass.password,saltround)
            userPass.password = bcryptPass
            console.log(userPass)
        }catch(error){
            next(error)
        }
}
else{
    next()
}
})


const RegisModel = new mongoose.model("registration", userRegisSchema);

module.exports = RegisModel;
