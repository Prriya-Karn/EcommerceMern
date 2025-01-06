const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    filePath: {
        type: String,
        required: true
    },
    uploadedAt: {
        type: Date,
        default: Date.now
    }
})

const imageModel = new mongoose.model("imageFile",imageSchema);
module.exports = imageModel;