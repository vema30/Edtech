const mongoose = require('mongoose');
const mailSender = require('../utils/mailSender');
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

async function sendVerification(email,otp){
    try{
            const mailResponse = await mailSender(email,"vervication from studynotion",otp);
            console.log("email sent successfully",mailResponse);
    }
    catch(error){
   console.log(
    "error occured while sending mails",error);
   throw error;

    }
}
OTPschema.pre("save",async  function(next){
    await  sendVerification(this.email,this.otp);
    next();
})
module.exports= mongoose.model('OTP',OTPschema);