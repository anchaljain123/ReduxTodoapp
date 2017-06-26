const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const CommentSchema = new mongoose.Schema({
  comment:{
    type:String,
    required:true
  },
  todoId:{
    type:Schema.Types.ObjectId,
    ref:'Todo',
    required: true,
  },
  postedBy:{
    type:Schema.Types.ObjectId,
    ref:'User',
    required: true,
  }
},{
  timestamps:true
});

module.exports = mongoose.model('Comment',CommentSchema);
