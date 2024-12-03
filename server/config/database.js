const mongoose = require('mongoose');
require('dotenv').config();
const DbConnect =async()=>{
     await mongoose.connect(process.env.DB_URL,{
   useNewUrlParser:true,
   useUnifiedTopology:true,
     }).then(()=>{
        console.log("db connected sucessfully")
     }).catch((e)=>{
        console.log("error in db connection")
        console.log(e);
        process.exit(1);
     })
}
module.exports=DbConnect;