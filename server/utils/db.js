const mongoose = require('mongoose');

const url = process.env.MONGODB_URL;

let isConnected = false; // Track connection status

const connection = async () => {
    if (isConnected) {
        console.log("✅ Already connected to MongoDB.");
        return;
    }

    try {
        const db = await mongoose.connect(url, {
            maxPoolSize: 10, // Enable connection pooling
        });

        isConnected = db.connections[0].readyState === 1;
        console.log("✅ Connected to MongoDB successfully.");
    } catch (error) {
        console.error("❌ MongoDB Connection Error:", error.message);
    }
};

module.exports = connection;








// const mongoose = require('mongoose');

// const url = process.env.MONGODB_URL


// const connection = async()=>{
//     try{
//         await mongoose.connect(url);
//         console.log("connected to db")
//     }catch(error){
//         console.log("not connected to db")
//     }
// }

// module.exports = connection

