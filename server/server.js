 const express = require('express');
 require('dotenv').config();
 const DbConnect=require('./config/database');
const app=express();
DbConnect();
app.listen(process.env.PORT,()=>{
    console.log("server running");
})
