const jwt = require("jsonwebtoken");
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
        // console.log("userPass,",userPass)
        // const saltround = await bcrypt.genSalt(10);
        // const bcryptPass = await bcrypt.hash(userPass.password,saltround)
        // userPass.password = bcryptPass
        // console.log(userPass);
        
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



// compare the password (login pass validation) using instance method:-
userRegisSchema.methods.comparePass = async function(pass){
    try{
        return bcrypt.compare(pass,this.password)
    }catch(error){
        console.log(error)
    }
}



// generating token using instance method :-
userRegisSchema.methods.generateToken = async function(){
    try{
        const tokenOfParticularUser = jwt.sign({
            // creating the payload:-
            userId : this._id.toString(),
            email : this.email,
            isAdmin : this.isAdmin
        },

          // creating the signature
          process.env.secretKey,{
            expiresIn : "30d"
          });

          return tokenOfParticularUser;

    }catch(error){
        console.log(error)
    }
}

const RegisModel = new mongoose.model("registration", userRegisSchema);

module.exports = RegisModel;
