const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
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
    message: {
        type: String,
        required: true,
        minlength: 5
    }

})

const contactData = new mongoose.model("contact",ContactSchema);

module.exports = contactData;