const mongoose = require('mongoose');
const SubSection = require('./SubSection');
const Schema = mongoose.Schema;

const sectionSchema = new Schema({
    sectionName: {
        type: String,
       
    },
    SubSection:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'SubSection',
        required: true,
    }
    
})
module.exports = mongoose.model('SectionSchema', sectionSchema);
