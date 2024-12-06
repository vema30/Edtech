const User = require('../models/User');
const OTP = require('../models/OTP');
const bcrypt = require('bcrypt');
const Profile = require('../models/Profile');
const otpGenerator = require('otp-generator');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Function to send OTP
const sendOTP = async (req, res) => {
    try {
        const { email } = req.body;

        // Check if user already exists
        const checkUserPresent = await User.findOne({ email });
        if (checkUserPresent) {
            return res.status(409).json({
                success: false,
                message: "User already registered",
            });
        }

        // Generate unique OTP
        let otp;
        const maxRetries = 5;
        let retries = 0;

        do {
            otp = otpGenerator.generate(6, {
                upperCaseAlphabets: false,
                lowerCaseAlphabets: false,
                specialChars: false,
            });
            retries++;
        } while (await OTP.findOne({ otp }) && retries < maxRetries);

        if (retries === maxRetries) {
            return res.status(500).json({
                success: false,
                message: "Failed to generate unique OTP, please try again",
            });
        }

        // Save OTP with expiry
        await OTP.create({ email, otp, expiresAt: Date.now() + 5 * 60 * 1000 }); // 5 mins expiry

        return res.status(200).json({
            success: true,
            message: 'OTP sent successfully',
        });
    } catch (error) {
        console.error("Error in sendOTP:", error);
        return res.status(500).json({
            success: false,
            message: 'Error while sending OTP',
        });
    }
};

// Function to sign up
const signUp = async (req, res) => {
    try {
        const { firstName, lastName, email, password, confirmPassword, contactNumber, otp, accountType } = req.body;

        // Validate inputs
        if (!firstName || !lastName || !email || !password || !confirmPassword || !otp) {
            return res.status(403).json({
                success: false,
                message: 'All fields are required',
            });
        }

        if (password !== confirmPassword) {
            return res.status(403).json({
                success: false,
                message: 'Passwords do not match',
            });
        }

        if (await User.findOne({ email })) {
            return res.status(400).json({
                success: false,
                message: 'User already registered',
            });
        }

        // Validate OTP
        const recentOtp = await OTP.findOne({ email }).sort({ createdAt: -1 });
        if (!recentOtp || recentOtp.otp !== otp || recentOtp.expiresAt < Date.now()) {
            return res.status(400).json({
                success: false,
                message: 'Invalid or expired OTP',
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user profile
        const profileDetails = await Profile.create({ contactNumber });

        // Create user
        const user = await User.create({
            firstName,
            lastName,
            email,
            contactNumber,
            password: hashedPassword,
            accountType,
            additionalDetails: profileDetails._id,
            //cool bro  it's an third party api to generate a image baced on names just like defalut user photo
            image: `http://api.dicebear.com/5.x/initials/svg?seed=${firstName}${lastName}`,
        });

        return res.status(201).json({
            success: true,
            message: 'User registered successfully',
        });
    } catch (error) {
        console.error("Error in signUp:", error);
        return res.status(500).json({
            success: false,
            message: 'Error while registering user',
        });
    }
};

// Function to log in
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: 'Email and password are required',
            });
        }

        const user = await User.findOne({ email }).populate("additionalDetails");
        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'User not registered',
            });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(403).json({
                success: false,
                message: 'Incorrect password',
            });
        }

        // Generate JWT token
        const token = jwt.sign(
            { id: user._id, email: user.email, accountType: user.accountType },
            process.env.JWT_SECRET,
            { expiresIn: '2h' }
        );
          //due to privacy concers lets remove the  passoword from current user  it will be helpfull to send that in frontenf
        user.password = undefined;

        return res
            .cookie('token', token, {
                expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days
                httpOnly: true,
                
            })
            .status(200)
            .json({
                success: true,
                message: 'Login successful',
                token,
                user, //see we are sending this we have removed pass from user object  , have any dout kinfly check by debugginh
            });
    } catch (error) {
        console.error("Error in login:", error);
        return res.status(500).json({
            success: false,
            message: 'Error while logging in',
        });
    }
};

//i have to right change password controller in future for effective learning

module.exports = {
    sendOTP,
    signUp,
    login,
};
