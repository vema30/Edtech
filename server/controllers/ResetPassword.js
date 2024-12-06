const User = require("../models/User")
const mailSender = require("../utils/mailSender")
const bcrypt = require("bcrypt")
const crypto = require("crypto")

//fucntion to resent update tokenofpASSWORD in mongodb
exports.resetPasswordToken = async (req, res) => {
  try {

    //algo
    //take mail from request 
    //check if mail exists or not
    // generate a token
    // update it by findOneAndUpdate ->email ,token ...
    // to provide a user  easiy reset password lets create a front end link and share it on email
    const email = req.body.email   
    const user = await User.findOne({ email: email })
    if (!user) {
      return res.json({
        success: false,
        message: `This Email: ${email} is not Registered With Us Enter a Valid Email `,
      })
    }
    const token = crypto.randomBytes(20).toString("hex")

    const updatedDetails = await User.findOneAndUpdate(
      { email: email },
      {
        token: token,
        resetPasswordExpires: Date.now() + 3600000,
      },
      { new: true }
    )
    console.log("DETAILS", updatedDetails)

    const url = `http://localhost:3000/update-password/${token}`
   // const url = `https://studynotion-edtech-project.vercel.app/update-password/${token}`

   //calling mailsender to send mail , check top we have imported it 
    await mailSender(
      email,
      "Password Reset",
      `Your Link for email verification is ${url}. Please click this url to reset your password.`
    )

    res.json({
      success: true,
      message:
        "Email Sent Successfully, Please Check Your Email to Continue Further",
    })
  } catch (error) {
    return res.json({
      error: error.message,
      success: false,
      message: `Some Error in Sending the Reset Message`,
    })
  }
}
  //controller for resetPassword..
exports.resetPassword = async (req, res) => {
  //algo
  // take basic requirements i=like pass , confirmPass ,token from body
  //if pass != confirmpass return json false
  //lets checck about the token in users  if !token lets return neg respose
  //check avbout resetpasswordExpires
  try {
    const { password, confirmPassword, token } = req.body

    if (confirmPassword !== password) {
      return res.json({
        success: false,
        message: "Password and Confirm Password Does not Match",
      })
    }
    const userDetails = await User.findOne({ token: token })
    if (!userDetails) {
      return res.json({
        success: false,
        message: "Token is Invalid",
      })
    }
    if (!(userDetails.resetPasswordExpires > Date.now())) {
      return res.status(403).json({
        success: false,
        message: `Token is Expired, Please Regenerate Your Token`,
      })
    }
    //lets hash the new pass which we take from user input and next step goes to updating it
    const encryptedPassword = await bcrypt.hash(password, 10)
    await User.findOneAndUpdate(
      { token: token },
      { password: encryptedPassword },
      { new: true }
    )
    res.json({
      success: true,
      message: `Password Reset Successful`,
    })
  } catch (error) {
    return res.json({
      error: error.message,
      success: false,
      message: `Some Error in Updating the Password`,
    })
  }
}
