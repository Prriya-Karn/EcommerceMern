const mongoose = require('mongoose');

const url = process.env.MONGODB_URL

mongoose.set("bufferCommands", false);

const connection = async()=>{
    try{
        await mongoose.connect(url);
        console.log("connected to db")
    }catch(error){
        console.log("not connected to db")
    }
}

module.exports = connection

