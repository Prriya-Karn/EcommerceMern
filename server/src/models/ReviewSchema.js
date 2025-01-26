const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    reviewMessage : {
        type : String,
        required : true
    },
    name : {
        type :  String,
        required : true
    },
    email : {
        type :  String,
        required : true,
        unique : true
    }
})

const reviewModel = new mongoose.model('reviewData',reviewSchema);
module.exports = reviewModel;