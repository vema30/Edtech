const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseProgress = new Schema({
      CourseID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Course',
      },
      completedVideos:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'SubSection'
        }
      ]
});

module.exports = mongoose.model('CourseProgress', courseProgress);
