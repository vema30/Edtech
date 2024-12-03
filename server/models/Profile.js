const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'], // Optional validation for gender
    },
    dob: {
        type: String, 
    },
    about: {
        type: String,
        required: true,
        trim: true, // Trimming whitespace for cleanliness
    },
    contactNumber: {
        type: String,
        required: true,
        trim: true, // Ensures no leading/trailing spaces
    },
});

module.exports = mongoose.model('Profile', profileSchema);
