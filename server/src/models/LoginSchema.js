const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        unique: true,
        require: true
    }
    
})

const loginModel = new mongoose.model("login",loginSchema);

module.exports = loginModel;