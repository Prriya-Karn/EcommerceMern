const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
    filename: { type: String}, // Save the unique file name
    filePath: { type: String }, // Save the full file path
    mimetype:{type:String},
    uploadedAt: { type: Date, default: Date.now }, // Optional: timestamp
    productName : {type:String,require:true},
    price : {type:Number,require:true}
});

const ImageModel = mongoose.model("imagefile", ImageSchema);

module.exports = ImageModel;
