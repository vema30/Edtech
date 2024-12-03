const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const OTPschema= new Schema({
      email:{
        type:String,required:true
      },
      otp:{
        type:String,required:true
      },
      createdAt:{
        type:Date,
        default:Date.now(),
        expires:5*60
      }
})
module.exports= mongoose.model('OTP',OTPschema);