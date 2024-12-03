const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tags = new Schema({
    
    name: {
        type: String, 
        required: true,
    },
    description: {
        type: String,
        
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Course'
    },
});

module.exports = mongoose.model('Tag', tags);
