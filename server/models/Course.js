const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    courseName: {
        type: String,
        
    },
    courseDescription: {
        type: String, 
    },
    instructor: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true,
         // Trimming whitespace for cleanliness
    },
    whatYouWillLearn: {
        type: String,
        
    },
    courseContent:[{
          type:mongoose.Schema.Types.ObjectId,
          ref:'Section'
    }],
    ratingAndReview:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'RatingAndReview'
    }],
    price:{
        type:Number
    },
    thumbNail:{
        type:Number
    },
    tag:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Tag'
    },
    studentsEnrolled:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    }]
});

module.exports = mongoose.model('C ourse', courseSchema);
