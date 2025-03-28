// creating own server:-
require("dotenv").config();
const express = require('express');
const cors = require('cors');
const app = express();


const regisRouter = require("./router/regis-router");
const loginRouter = require("./router/login-router")
const connection = require('./utils/db');
const errorMiddleware = require("./middleware/error-middleware");
const contactRouter = require("./router/contact-router");
const delRouter = require("./router/admin-router/deleteUser-router");
const getUserRouter = require("./router/getUserById-router");
const updateRouter = require("./router/admin-router/update-router");
const userRouter = require("./router/user-router");
const AllUserRouter = require("./router/admin-router/getAllUserData-router");
const AllContactDataRouter = require("./router/admin-router/getAllContactData-router");
const delConRouter = require("./router/admin-router/deleteContact-router");
const conDataByIdRouter = require("./router/admin-router/getConDataById-router");
const updateConDataRouter = require("./router/admin-router/updateConDataRouter");
const imageUploadRouter = require("./router/admin-router/UploadImage-router");
const path = require('path');
const getImageRouter = require("./router/admin-router/getImage-router");
const delImgRouter = require("./router/admin-router/deleteImg-router");
const updateImgRouter = require("./router/admin-router/updateImage-router");
const getImgByIdRouter = require("./router/admin-router/getImageById-router");
const getAlImgRouter = require("./router/getAlImage-router");
const addToCartRouter = require("./router/addToCart-router");
const allCartDataRouter = require("./router/allCartData-router");
const cartDataByIdRouter = require("./router/cartDataById-router");
const delCartByIdRouter = require("./router/delCartByIdRouter");
const reviewRouter = require("./router/review-router");
const reviewGetDataRouter = require("./router/reviewGetData-router");
const paymentRouter = require("./router/payment-router");
const getRazorKeyIdRouter = require("./router/getRazorKeyId-router");
const chatRouter = require("./router/chat-router");

// const corsOption = {
//     origin: [
//         "http://localhost:5175",                  // Localhost for development
//         // "https://ecommerce-mern-ashy.vercel.app",  // Vercel frontend for production
//     ],
//     methods: "GET,PUT,PATCH,DELETE,POST,HEAD",
//     allowedHeaders: ["Content-Type", "Authorization", "Access-Control-Allow-Origin"],
//     credentials: true,
// };

// app.use(cors(corsOption));




// const corsOption = {
//     origin: ["http://localhost:5174","https://ecommerce-mern-neja.vercel.app"],
//     methods: "GET,PUT,PATCH,DELETE,POST,HEAD",
//     allowedHeaders: ["Content-Type", "Authorization"],
//     credentials: true,
// };

// app.use(cors(corsOption));




const corsOptions = {
    origin: ["http://localhost:5174", "https://ecommerce-mern-neja.vercel.app"],
    methods: "GET, PUT, PATCH, DELETE, POST, HEAD",
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
};

// Apply CORS middleware properly
app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); 



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api',regisRouter);
app.use('/api',loginRouter);
app.use('/api',contactRouter);
app.use('/api',getUserRouter);
app.use("/api",userRouter);
app.use('/api/admin',delRouter);
app.use("/api/admin",delConRouter);
app.use("/api/admin",updateRouter);
app.use('/api/admin',AllUserRouter);
app.use('/api/admin',AllContactDataRouter);
app.use("/api/admin",conDataByIdRouter);
app.use("/api/admin",updateConDataRouter);
app.use("/api/admin",imageUploadRouter);
app.use("/api/admin",getImageRouter);
app.use("/api/admin",delImgRouter);
app.use("/api/admin",updateImgRouter);
app.use("/api/admin",getImgByIdRouter);
app.use("/api",getAlImgRouter);
app.use("/api",addToCartRouter);
app.use("/api",allCartDataRouter);
app.use("/api",cartDataByIdRouter);
app.use("/api",delCartByIdRouter);
app.use("/api",reviewRouter);
app.use("/api",reviewGetDataRouter);
app.use("/api",paymentRouter);
app.use("/api",getRazorKeyIdRouter);

app.use('/api', chatRouter);







// Static folder to serve uploaded images
// app.use('/images', express.static(path.join(__dirname, "../client/public/images")));

// Serve React build files
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
    
    // For all routes, return the React app's index.html
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
    });
}








app.use(errorMiddleware)

connection().then(()=>{
    const PORT = process.env.PORT || 3001;
    app.listen(PORT,()=>{
        console.log(`server is running at ${PORT}`)
    })
}).catch((error)=>{
    console.log(error)
})