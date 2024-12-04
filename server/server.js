 const express = require('express');
 const cookieParser = require('cookie-parser');
 const DbConnect=require('./config/database');
const app=express();
require('dotenv').config();
DbConnect();

app.use(express.json()); // Parse JSON request bodies
app.use(cookieParser()); // Parse cookies

app.listen(process.env.PORT,()=>{
    console.log("server running");
})
