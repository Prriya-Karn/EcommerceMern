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
    isAdmin: {
        type: String,
        require: true,
        default: false
    }
})

const RegisModel = new mongoose.model("registration", userRegisSchema);

module.exports = RegisModel;
