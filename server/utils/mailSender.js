const nodemailer= require('nodemailer');
require('dotenv').config();
const mailSender = async(email,title,body)=>{
    try{
            let transport = nodemailer.createTransport({
                host:process.env.MAILHOST,
                auth:{
                    user:process.env.MAILUSER,
                    pass:process.env.MAILPASS
                }
            })
            let info=transport.sendMail({
                from :'StyNotion || codehelp',
                to:`${email}`,
                subject:`${title}`,
                html:`${body}`,

            }) 
            console.log(info);
            return info;
    }       
    catch(error){
            console.log(error.message);

    }
}
module.exports=mailSender;