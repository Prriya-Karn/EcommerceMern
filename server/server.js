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

// CORS POLICY :-

const corsOption = {
    origin : "http://localhost:5173",
    methods: "GET,PUT,PATCH,DELETE,POST,HEAD",
    credentials : true
}
app.use(cors(corsOption))





app.use(express.json())
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

app.use(errorMiddleware)


connection().then(()=>{
    const PORT = process.env.port || 3001;
    app.listen(PORT,()=>{
        console.log(`server is running at ${PORT}`)
    })
}).catch((error)=>{
    console.log(error)
})


