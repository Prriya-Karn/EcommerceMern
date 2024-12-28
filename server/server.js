// creating own server:-
require("dotenv").config();
const express = require('express');
const app = express();


const regisRouter = require("./router/regis-router");
const loginRouter = require("./router/login-router")
const connection = require('./utils/db');
const errorMiddleware = require("./middleware/error-middleware");
const contactRouter = require("./router/contact-router");
const delRouter = require("./router/admin-router/delete-router");
const getUserRouter = require("./router/getUserById-router");
const updateRouter = require("./router/admin-router/update-router");
const userRouter = require("./router/user-router");

app.use(express.json())
app.use('/api',regisRouter);
app.use('/api',loginRouter);
app.use('/api',contactRouter);
app.use('/api',delRouter);
app.use('/api',getUserRouter);
app.use("/api",updateRouter);
app.use("/api",userRouter);

app.use(errorMiddleware)

connection().then(()=>{
    const PORT = 3000;
    app.listen(PORT,()=>{
        console.log(`server is running at ${PORT}`)
    })
}).catch((error)=>{
    console.log(error)
})


