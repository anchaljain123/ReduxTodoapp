const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const CommentSchema = new mongoose.Schema({
  comment:{
    type:String,
    required:true
  },
  postId:Object,
  userID:{
    type:Schema.Types.ObjectId,
    ref:'User',
    required: true,
  }
},{
  timestamps:true
});

module.exports = mongoose.model('Comment',CommentSchema);
