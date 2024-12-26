// creating own server:-
require("dotenv").config();
const express = require('express');
const app = express();


const regisRouter = require("./router/regis-router");
const connection = require('./utils/db');
const errorMiddleware = require("./middleware/error-middleware")

app.use(express.json())
app.use('/api',regisRouter);

// const PORT = 3000;
// app.listen(PORT,()=>{
//     console.log(`server is running at ${PORT}`)
// })

app.use(errorMiddleware)

connection().then(()=>{
    const PORT = 3000;
    app.listen(PORT,()=>{
        console.log(`server is running at ${PORT}`)
    })
}).catch((error)=>{
    console.log(error)
})


