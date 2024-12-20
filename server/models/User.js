const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    contactNumber: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    accountType: {
        type: String,
        enum: ['Admin', 'Student', 'Instructor'],
        required: true,
    },
    additionalDetails: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Profile",
    },
    courses: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course", // Corrected typo
    },
    image: {
        type: String,
        required: true,
    },
    token:{
        type: String,
    },
    resetPasswordExpires:{
        type: Date,
    },

    courseProgress: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "CourseProgress", // Corrected typo
        }
    ]
});

// Corrected model definition
const User = mongoose.model('User', userSchema);
module.exports = User;
