const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const CommentSchema = new mongoose.Schema({
  comment:{
    type:String,
    required:true
  },
  todoId:Object,
  postedBy:{
    type:Schema.Types.ObjectId,
    ref:'User',
    required: true,
  },
  tagEmail:String,

},{
  timestamps:true
});

module.exports = mongoose.model('Comment',CommentSchema);
