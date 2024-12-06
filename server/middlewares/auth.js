const jwt = require('jsonwebtoken');
require('dotenv').config();

const auth = async (req, res, next) => {
    try {
        // Extract token from cookies, body, or headers
        const token =
            req.cookies?.token || // Check cookies
            req.body?.token || // Check request body
            req.header("Authorization")?.replace("Bearer ", ""); // Check Authorization header

        // If token is not found, return an error
        if (!token) {
            return res.status(400).json({
                success: false,
                message: "Token is missing",
            });
        }

        try {
            // Verify the token
            const decoded = await jwt.verify(token, process.env.JWT_SECRET);
            console.log("Decoded token:", decoded);

            // Attach decoded payload to the request object
            req.user = decoded;

            // Proceed to the next middleware or route handler
            next();
        } catch (err) {
            console.log("Invalid token:", err);
            return res.status(401).json({
                success: false,
                message: "Invalid or expired token",
            });
        }
    } catch (err) {
        console.log("Error in auth middleware:", err);
        return res.status(500).json({
            success: false,
            message: "Error during authentication",
            error: err.message,
        });
    }
};
// we need to provide role based access so let's create three controllers for authentication based on role 
const isStudent =async(req, res, next)=>{
     try{
        if(req.user.accountType!='Student')
            {
               return res.status(401).json({
                     status:false,
                     message:'THis is the protected route only for Students'
               });
            }
            next();
     }catch(error)
     {
        return res.status(500).json({
            success:false,
            message:"User role  cannot be verified"
        })
     }
}
const isAdmin =async(req, res, next)=>{
    try{
        
        if(req.user.accountType!='Admin')
            {
               return res.status(401).json({
                     status:false,
                     message:'THis is the protected route only for Admin'
               });
            }
            next();
    }catch(error)
    {
       return res.status(500).json({
           success:false,
           message:"admin role  cannot be verified"
       })
    }
}
const isInstructor = async(req, res, next)=>{
    try{
        if(req.user.accountType!='Instructor')
            {
               return res.status(401).json({
                     status:false,
                     message:'THis is the protected route only for Instructor'
               });
            }
            next();
   
    }catch(error)
    {
       return res.status(500).json({
           success:false,
           message:"instructor role  cannot be verified"
       })
    }
}

module.exports = {
    auth,
    isStudent,
    isAdmin,
    isInstructor
};
